"use server";

import { LangChainStream, StreamingTextResponse } from "ai";
import { PineconeClient } from "@pinecone-database/pinecone";
import * as dotenv from "dotenv";
import { RetrievalQAChain, VectorDBQAChain, loadQAStuffChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { BytesOutputParser } from "langchain/dist/schema/output_parser";

dotenv.config();

const client = new PineconeClient();


export async function POST(req: Request) {
    const {prompt} = await req.json();

    await client.init({
        apiKey: process.env.PINECONE_API_KEY!,
        environment: process.env.PINECONE_ENV!,
    });
    const pineconeIndex = await client.Index("cadmir");
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex, namespace:"cad1"}
        );
    const docs = await vectorStore.similaritySearch(prompt, 10)
    console.log("docs from search route: ", docs)

    const { stream, handlers, writer } = LangChainStream();


    const model = new OpenAI({streaming: true, maxTokens: 700});
    const chain = loadQAStuffChain(model);

    chain
    .call({question: prompt, input_documents: docs}, [handlers])
    .catch((err) => {
        console.error(err);
    });

    return new StreamingTextResponse(stream, );
}


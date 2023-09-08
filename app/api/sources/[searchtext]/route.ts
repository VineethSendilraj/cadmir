"use server";

import { LangChainStream, StreamingTextResponse, experimental_StreamData } from "ai";
import { PineconeClient } from "@pinecone-database/pinecone";
import * as dotenv from "dotenv";
import { RetrievalQAChain, VectorDBQAChain, loadQAStuffChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { BytesOutputParser } from "langchain/dist/schema/output_parser";

dotenv.config();

const client = new PineconeClient();


export async function GET(req: Request,{ params }: { params: { searchtext: string } }) {
    const searchtext = params.searchtext;
    await client.init({
        apiKey: process.env.PINECONE_API_KEY!,
        environment: process.env.PINECONE_ENV!,
    });
    const pineconeIndex = await client.Index("cadmir");
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex, namespace:"cad1"}
    );
    const docs = await vectorStore.similaritySearch(searchtext, 10)
    console.log("search text", searchtext)
    console.log("got req for sources, ", JSON.stringify(docs) )

    return new Response(JSON.stringify(docs), {headers: {"content-type": "application/json"}})
}

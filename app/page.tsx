"use client";
import Link from "next/link";
import { useCompletion } from "ai/react";
import Image from "next/image";
import homepage from "../public/homepage.png";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Home() {
  const [searchtext, setsearchtext] = useState("");
  const handleSeach = async () => {
    if (searchtext != "") {
      try {
        await complete(searchtext);
      } catch (error) {
        console.error("Error during completion:", error);
      }
    }
  };
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/search",
    body: {
      query: searchtext,
    },
  });
  return (
    <>
      <div className="mt-[100px] text-center">
        <span className="px-4 py-2 mx-2 rounded-3xl border-violet-300 border-solid border-[0.5px] bg-purple-100 text-lg font-small text-purple-600">
          3,845 papers
        </span>
        <span className="px-4 mx-2 py-2 rounded-3xl border-pink-300 border-solid border-[0.5px] bg-pink-100 text-lg font-small text-pink-600">
          93,008 embeddings
        </span>
      </div>

      <div className="my-4 flex flex-col justify-center items-center">
        <div className="text-6xl text-center max-w-4xl font-bold">
          An AI powered miRNA heart disease database
        </div>
        <div className="pt-4 text-xl text-center flex justify-center items-center font-light text-gray-600">
          <p className="max-w-xl">
            Ask questions about miRNA and coronary artery disease, and get
            answers from the latest research.
          </p>
        </div>
        <div></div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="bg-gray-50 px-4 border-gray-200 border-[0.5px] rounded-full mx-3  py-3 flex justify-between items-center my-5">
          <input
            type="text"
            className="outline-none bg-transparent w-[500px]"
            placeholder="Search for anything (CAD + miRNA related)"
            onChange={(e) => setsearchtext(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSeach();
            }}
          />
          <button onClick={handleSeach}>
            <MagnifyingGlassIcon
              width={24}
              height={24}
              className="text-gray-500"
            />
          </button>
        </div>
      </div>

      <p>answer: {completion}</p>
    </>
  );
}

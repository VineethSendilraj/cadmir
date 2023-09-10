"use client";

import Link from "next/link";
import { useCompletion } from "ai/react";
import Image from "next/image";
import homepage from "../public/homepage.png";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import useSWR from "swr";

function useSource(doi: string) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://api.unpaywall.org/v2/" + doi + "?email=ryandu9221@gmail.com",
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function removeDuplicates(arr: any) {
  // return arr.filter((item: any, index: number) => arr.indexOf(item) === index);
  return arr;
}

export default function Home() {
  const [searchtext, setsearchtext] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSeach = async () => {
    if (searchtext != "") {
      setError("");
      try {
        setLoading(true);
        await complete(
          searchtext +
            " Write a 2 - 3 paragraph long response that answers the question specifically with examples, evidence, and details."
        );

        const sources = await (
          await fetch("/api/sources/" + searchtext)
        ).json();
        console.log("sourcesssss", sources);
        const filteredSources = removeDuplicates(
          sources.map((source: any) => source.metadata.doi)
        );
        console.log("source: ", sources);
        console.log("filtered sources, ", filteredSources);
        setSources(filteredSources);
        setLoading(false);
      } catch (error) {
        console.error("Error during completion:", error);
        setLoading(false);
      }
    } else {
      setError("Please enter a search query");
    }
  };
  const { complete, completion } = useCompletion({
    api: "/api/search",
    body: {
      query: searchtext,
    },
  });

  const [sources, setSources] = useState([]);
  return (
    <>
      <div className="mt-[150px] text-center">
        <span className="px-4 py-2 mx-2 rounded-3xl border-violet-300 border-solid border-[0.5px] bg-purple-100 text-lg font-small text-purple-600">
          3,845 papers
        </span>
        <span className="px-4 mx-2 py-2 rounded-3xl border-pink-300 border-solid border-[0.5px] bg-pink-100 text-lg font-small text-pink-600">
          93,008 embeddings
        </span>
      </div>

      <div className="my-6 flex flex-col justify-center items-center">
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

      <div className="w-full  flex-col flex justify-center items-center">
        <div className="bg-gray-50 px-4 border-gray-200 border rounded-full mx-3  py-3 flex justify-between items-center my-5">
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

        {error != "" && <div className="text-red-600 text-lg">{error}</div>}

        {loading && completion == "" && (
          <>
            <div
              className="animate-spin inline-block w-8 h-8 border-[2px] border-current border-t-transparent text-indigo-600 rounded-full mt-16"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </>
        )}

        {completion != "" && completion != undefined && (
          <div className="max-w-3xl my-10 border-[1px] border-gray-200 bg-gray-50 rounded-3xl p-8">
            <h2 className="font-sans font-bold text-gray-700 pb-3">ANSWER</h2>
            <p>{completion}</p>
            <div>
              <h2 className="font-sans font-bold text-gray-700 py-3 pt-6">
                SOURCES
              </h2>
              {sources.map((source, index) => (
                <Source doi={source} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function Source({ doi }: { doi: string }) {
  const { data, isLoading, isError } = useSource(doi);
  return (
    <>
      {!isLoading && !isError && (
        <div className="py-2">
          <Link
            href={data.doi_url}
            className="font-semibold text-gray-700 hover:text-indigo-800"
          >
            {data.title}
          </Link>
          <div className="text-gray-600">
            {data.z_authors.map(
              (
                author: { given: string[] | undefined; family: string },
                index: any
              ) =>
                author.given != undefined &&
                author.given[0] +
                  ". " +
                  author.family +
                  (index == data.z_authors.count ? "" : ", ")
            )}
          </div>
        </div>
      )}
    </>
  );
}

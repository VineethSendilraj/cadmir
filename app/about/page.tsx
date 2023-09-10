/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <div className="prose p-12 max-w-3xl bg-slate-50 border-[0.5px] border-slate-100 my-12 rounded-2xl">
          <h1>About</h1>
          <p>
            <b>
              CADmir is an AI powered heart disease related miRNA database
              created by Lambert iGEM.
            </b>{" "}
            Research is messy, especially in the field of miRNAs. Functional
            information about miRNAs are scattered everywhere and there's no one
            place to go for information. We realized this issue when we were
            doing miRNA research for our 2022 project, and decided to create
            CADmir to solve this problem.
          </p>

          <p>
            Using powerful large language models, we processed 3,845 open access
            papers relating to miRNAs from PubMed and embedded all of their
            content into a vector database capable of storing both the data
            itself along with an easily searchable form of the meaning of the
            data. This allowed us to create a search engine that can answer
            questions regarding miRNAs taht relate to heart disease accurately
            with sources to back up.
          </p>
          <p>
            Learn more about CADmir, how it works, and why we created it on{" "}
            <a href="https://2023.igem.wiki/lambert-ga/software/">
              Lambert iGEM's 2023 wiki.
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

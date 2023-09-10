import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="my-8 mx-12 flex justify-start items-center">
        <Link href="/" className="pr-16 text-4xl font-bold">
          CADmir
        </Link>
        <Link href="about/" className="px-16 text-lg">
          About
        </Link>
        {/* <Link href="search/
            "className="pl-16 text-lg"> Search </Link> */}
      </div>
    </>
  );
}

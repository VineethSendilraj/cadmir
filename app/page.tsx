import Link from "next/link"
import Image from "next/image"
import homepage from "../public/homepage.png"


export default function Home(){
  return (<>
   <div className= "mt-[100px] text-center">
    <span className="px-4 py-.6 rounded-3xl border-violet-600 border-solid border-[1.2px] bg-purple-200 text-lg font-small text-purple-600">2350 pages</span>
    <span className= "px-4 py-.6 ml-[4px] rounded-3xl border-violet-600 border-solid border-[1.2px] bg-indigo-200 text-lg font-small text-indigo-600">24 citations</span>
    <span className= "px-4 py-.6 ml-[4px] rounded-3xl border-blue-600 border-solid border-[1.2px] bg-blue-200 text-lg font-small text-blue-600">523 miRNAs</span>
   </div>
   <div className= "text-6xl text-center font-bold">A Practical miRNA Database</div>
   <div className="pt-4 text-2xl text-center text-gray-400">read less papers while doing</div>
   <div className="pt-.5 text-2xl text-center text-gray-400">more research</div>
   <div className="mt-[30px] text-center">
    <Link href="search/"className="px-4 py-1 rounded-3xl text-xl font-small text-white bg-black">Search</Link>
    <Link href="donate/"className="ml-[24px] px-4 py-1 rounded-3xl text-xl font-small text-black bg-white border-black-600 border-solid border-[1.2px]">Donate</Link>
   </div>
   <div className="flex justify-center items-center">
   <Image src={homepage} alt="Picture of search results" width={1011} height={647} className="mt-20"/>
  </div>
  </>)
}
"use client"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { useState } from "react"
export default function Search () {
    const [searchtext,setsearchtext] = useState("");
    return(<>
            <div className="text-black bg-gray-50 flex w-full items-center py-4 rounded-xl shadow">
                <MagnifyingGlassIcon className="text-black mr-2 ml-4" width={19} height={19}/>
                <input placeholder = "search here" className = "bg-gray-50 pl-2 w-full outline-none"type="text" value={searchtext} onChange={(e) => setsearchtext(e.target.value)}/>
            </div>

        <div className=" text-black fontSize: 32 flex justify-start mt-3 font-bold text-2xl">Search Results</div>
    <table className="px-12 table-fixed w-full ml-7">
        <tr className="mt-10 font-semibold text-black text-left">
           <th  className="w-1.5">miRNA</th>
            <th className="w-1.5">Symptoms</th>
            <th className="w-1.5">Some</th>
            <th className="w-1.5">something 3</th>
            <th className="w-1.5">something 4</th>
        </tr>
        
        <tr className=" text-neutral-700 text-left border-t border-t-gray-200">
            <td className="w-1.5">miRNA-133p</td>
            <td className="w-1.5">annoying</td>
            <td className="w-1.5">crying</td>
            <td className="w-1.5">screaming</td>
            <td className="w-1.5">throwing up</td>
        </tr>
        
        <tr className="mt-4 text-neutral-700 text-left border-t border-t-gray-200">
            <td className="w-1.5">miRNA-133p</td>
            <td className="w-1.5">annoying</td>
            <td className="w-1.5">crying</td>
            <td className="w-1.5">screaming</td>
            <td className="w-1.5">throwing up</td>
        </tr>
        
        <tr className="mt-4 text-neutral-700 text-left border-t border-t-gray-200">
            <td className="w-1.5">miRNA-133p</td>
            <td className="w-1.5">annoying</td>
            <td className="w-1.5">crying</td>
            <td className="w-1.5">screaming</td>
            <td className="w-1.5">throwing up</td>
        </tr>
        
    </table>
    </>) 
    }
    


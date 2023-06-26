"use client"
import { useState } from "react"


export default function Search (){
    const [searchText, setsearchText] = useState("Search for miRNAs")
    return(<>
    <div  className= "flex justify-center items-center">
        <input value= {searchText} onChange={(e)=>setsearchText(e.target.value)} className="bg-gray-50 shadow rounded pr-[350px] pl-[5px] py-[4px] text-left text-black"/>
        
    </div>
    </>)
}
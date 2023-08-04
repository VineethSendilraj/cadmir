"use client"

import { useState } from "react"
export default function Search () {
    const [searchtext,setsearchtext] = useState("")
    return(<>

<div>
            <div className="text-black">
                <input className = "bg-gray-400"type="text" value={searchtext} onChange={(e) => setsearchtext(e.target.value)}/>
                <p>{searchtext}</p>
            </div>
        <div>
        <div className=" text-black, fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word">Search Results</div>
           <div  className="left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'">miRNA</div>
            <div className="left: 208, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'">Symptoms</div>
            <div className="left: 475, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'">Some</div>
            <div className="left: 694, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'">something 3</div>
            <div className="left: 957, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word'">something 4</div>

        </div>


        </>)}



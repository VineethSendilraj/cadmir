"use client"
import { useState } from "react"
import Link from "next/link"

export default function Search (){
    const [searchText, setsearchText] = useState("Search for miRNAs")
    onkeydown
    return(<>
    <div  className= "flex justify-center items-center">
       <form action="/searchresults" text-black> 
            <label htmlFor = "searchbar" >Search Bar:   </label>
            <input type="text" id="searchbar" name="searchbar"/>
            <input type="submit" value="Submit"/>
       </form>
    </div>
    </>)
}
//

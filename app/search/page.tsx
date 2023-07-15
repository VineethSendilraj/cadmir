"use client"

export default function Search (){

    return(<>
       <form action="/searchresults" text-black> 
            <label htmlFor = "searchbar" >Search Bar:   </label>
            <input type="text" id="searchbar" name="searchbar"/>
            <input type="submit" value="Submit"/>
       </form>
    </>)
}
//

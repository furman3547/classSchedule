import React from "react";
import { MdSearch } from "react-icons/md";
const Search=()=>{
    return ( <div className="search" action="/" method="get">
        <MdSearch classname="search-icons" size='1.3em'/>
    <input
        type="text"
        id="Search"
        placeholder="type to search all notes..."
        name="s" 
    />
    <button type="submit">Search</button>
</div>)

};

export default Search;
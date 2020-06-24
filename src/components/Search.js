import React from "react";
import "./Search.css"

function Search(props){
    return <form>
        <input type="text"
        name="searchName"
        onChange={props.handleInput}
        value={props.searchName}
        placeholder="Search Employee">
        </input>
    </form>
}

export default Search;
import React, {useState, useEffect} from "react"
import Search from "./Search"
import List from "./List"
import API from "../utils/API"

function ListContainer(){
    const [searchName, setSearchName] = useState("")
    const [res, setRes] = useState([])

    //call randomLoad on page load
    useEffect( () =>{
        randomLoad();
    }, []);

    const randomLoad=(() =>{
        API.search().then(result =>{
            const res = result.data.results
            setRes(res)
        })
    })

    //typed value
    const handleInput = event => {
        const value = event.target.value
        setSearchName(value)
    }

    //matching value of search field with array of users
    const filtSearch = res.filter(users => {
        const fullName = users.name.first + " " + users.name.last
        return fullName.toLowerCase().includes(searchName.toLowerCase())
    })

    //function descending name
    const nameDescend = (() => {
        const sortName = res.sort(function(a,z) {
            if(a.name.first > z.name.first) { return -1; }
            if(a.name.first < z.name.first) { return 1; }
            return 0;
        });
        const nameDescend=sortName.map(function(users){
            return(users)
        })
        setRes(nameDescend)
    })


    //function ascending name
    const nameAscend = (() =>{
        const sortName = res.sort(function(a,z){
            if (a.name.first < z.name.first) { return -1; }
            if (a.namefirst > z.namefirst) { return 1; }
            return 0;
        });
        const nameAscend = sortName.map(function(users){
            return(users)
        })
            setRes(nameAscend)
    })

return (
    <div>
        <Search handleInput = {handleInput}
        searchName={searchName}
        />

        <List users={filtSearch}
        searchName={searchName}
        nameAscend={nameAscend}
        nameDescend={nameDescend}
        />
    </div>
)

}

export default ListContainer;
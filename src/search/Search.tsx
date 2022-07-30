import React from "react";


export const Search = ({setSearch} : {setSearch:(value:string) => void}) => {
    return (
        <div className="input-container">
            <input type="text" className="input-part" placeholder="Search"
                   onChange={(e) => setSearch(e.target.value)}/>

                <label className="bi bi-search input-icon"></label>
        </div>
    )
}
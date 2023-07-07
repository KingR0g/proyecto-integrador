import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import style from "./Nav.module.css"


export default function nav(props) {

    //props --> {onSearch: function}

    return (
        <div className={style.container} >
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}
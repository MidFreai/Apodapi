import React, { useState, useEffect } from "react";

import Card from "./card.jsx";

import SearchApi from "../services/SearchApi.js";

export default function PainelCards(){
    const [Info, setInfo] = useState([]);

    useEffect(() => {
        SearchApi()
            .then(data => { setInfo(data); })
            .catch(error => { console.error(error); });
    }, []);

    return(
        <main>
            {Info.map((data)=>(<Card key={data.date} src={data.hdurl} nome={data.title} descricao={data.explanation}/>))}
        </main>
    )
}
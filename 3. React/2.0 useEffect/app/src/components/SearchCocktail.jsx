import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchCocktail = () => {
    const [inpu, setInput] = useState("")
    const [valueToSearch, setValueToSearch] = useState("")
    const [data, setData] = useState([])
    const [error, setError,]= useState(false)
    const [loading, setLoading] = useState(false)
    //useEffect met dependencyarray [valueToSearch] => zal dus functie uitvoeren on mount + valueToSearch wijzigt
    useEffect(() => {
        if (valueToSearch) {
            try {
                        (async () => {
            setLoading(true)
            setError(false)
          const { data: { drinks } = await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${valueToSearch}`)
      })()
    }, [valueToSearch])
            } catch (error) {
                
            }
        }

    
    return( <>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            setValueToSearch(input);
            setInput("");
        }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button>Search Cocktails</button>
        </form>
        <p>Error</p>
    </>)
}
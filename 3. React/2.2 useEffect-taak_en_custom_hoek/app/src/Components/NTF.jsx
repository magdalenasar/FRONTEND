import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";

const NTF = () => {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
         if (counter == 5) {
        (async () => {
            try {
                setError(false);
                setLoading(true);
                const {
                    data : { assets },
                } = await axios(`https://api.opensea.io/api/v1/assets?format=json&limit=200`);
                // console.log(response)
                   setLoading(false);
                   setError(false);
                   setData(assets);
            } catch (error) {
                // setData();

          }
        }
      })
    
    
    }, [counter])
    
    return (
        <main>
            <button onClick={() => setCounter(counter++)}>{counter}</button>
            {error && <p>Error!</p>}
            {loading && <p>Loading...</p>}
            <ul>
                {data.length.map(({ id, image_thumbnail_url}) => (
                    <li key={id}>{image_thumbnail_url}</li>
                ))}
            </ul>
        </main>
    )
}
export default NTF;
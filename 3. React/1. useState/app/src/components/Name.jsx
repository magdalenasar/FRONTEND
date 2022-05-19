import {useState} from 'react'
import Person from './Person';

const Name = () => {
    const [name, setsName] = useState("Jos");
    return (
     <>
        <h1>{name}</h1>
        <h1>{name}</h1>
        <h1>{name}</h1>    
            <Person name={name}/>
        <input
            type="text"
            value={name}
            onChange={(e) => {
                setsName(e.target.value)
            }} />
     </>
    );
};

export default Name;
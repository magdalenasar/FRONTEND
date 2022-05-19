import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeColor, addColor } from "../data/color";
import Color from "./Color";

const Colors = () => {
    const colors = useSelector((s) => s.colorState);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [color, setColor] = useState("#00000e");
    
    return (
        <>
            <hr />
            <h1>Colorsstuff</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addColor({ name, color }));    
                    setName('');
                    setColor("#000000")
                }}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input type="submit" value="add color" />
            </form>
            <ul>
                {colors.map(({ id, color, name }) => (
                    <li key={id} className="color" style={{ color }}>
                        <p contentEditable={true} onBlur={(e) => dispatch(changeName({ id, name: e.currentTarget.textContent }))}>{name}</p>
                        <Color id={id} color={color} dispatch={dispatch} changeColor={changeColor} />
                    </li>
                ))}
            </ul>
            <hr />
        </>
    );
};

export default Colors;
import {useState} from 'react'

const Color = ({ color: defaultColor, dispatch, changeColor, id }) => {
  const [color, setColor] = useState(defaultColor);
  return (
    <div>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={(e) => dispatch(changeColor({ id, color }))}>set</button>
    </div>
  );
};

export default Color; 
import { useContext } from "react";
import { Context } from "./Provider";

const Welcome = () => {
  const {
    user: { name, setName },
  } = useContext(Context);
  return (
    <>
      <div>Hallo {name}</div>
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default Welcome;

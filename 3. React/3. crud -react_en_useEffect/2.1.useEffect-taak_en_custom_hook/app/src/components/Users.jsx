import { useState, useEffect } from "react";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(2);
  const genderTypes = ["", "male", "female"];
  const [gender, setGender] = useState("");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);

        const {
          data: { results },
        } = await axios(
          `https://randomuser.me/api/?results=${counter}&gender=${gender}&format=json`
        );
        setUsers(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [counter, gender]);
  return (
    <div>
      <h1>Random Users</h1>
      <button onClick={() => setCounter((prevState) => prevState + 2)}>
        Verhoog met 2
      </button>
      gender:
      <select onChange={(e) => setGender(e.target.value)}>
        {genderTypes.map((type, i) => (
          <option value={type} key={i} selected={type === gender}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="number"
        min={1}
        max={200}
        value={counter}
        onChange={(e) => setCounter(parseInt(e.target.value))}
      />
      {loading && <p>LOADING...</p>}
      {error && <p>ERROR !!!</p>}
      {users.length > 0 && (
        <section className="cols">
          {users.map(
            ({
              name: { title, first, last },
              login: { uuid },
              picture: { large },
            }) => (
              <div key={uuid} className="col">
                <h1>{`${title} ${first} ${last}`}</h1>
                <img src={large} alt={`${title} ${first} ${last}`} />
              </div>
            )
          )}
        </section>
      )}
    </div>
  );
};

export default Users;

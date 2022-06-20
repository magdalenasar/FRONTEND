import db from "../db";
import { parse } from "../helpers";

const joined_data = ({ hobbies, persons }) => {
  return (
    <div>
      <main>
        <h1>data with extra info from childtables</h1>
        {persons.map((person) => (
          <details key={person.id}>
            <summary>{person.name}</summary>
            <ul>
              {hobbies
                .filter((hobby) => hobby.persons_id == person.id)
                .map((hobby) => (
                  <li key={hobby.id}>{hobby.name}</li>
                ))}
            </ul>
          </details>
        ))}
      </main>
    </div>
  );
};

export default joined_data;

export const getServerSideProps = async (context) => {
  const persons = parse(await db.select("*").from("persons"));
  const hobbies = parse(await db.select("*").from("hobbies"));
  return {
    props: {
      hobbies,
      persons,
    },
  };
};

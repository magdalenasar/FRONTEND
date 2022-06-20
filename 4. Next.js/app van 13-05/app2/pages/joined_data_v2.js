import db, { nest } from "../db";

const joined_data = ({ persons }) => {
  return (
    <div>
      <main>
        <h1>data with extra info from childtables</h1>
        {persons.map(({ id, name, age, hobbies }) => (
          <details key={id}>
            <summary>
              {name} (leeftijd:{age})
            </summary>
            <ul>
              {hobbies.map(({ id, name }) => (
                <li key={id}>{name}</li>
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
  // const personsQuery = await db("persons")
  //   .leftJoin("hobbies", "persons.id", "=", "hobbies.persons_id")
  //   .select(
  //     "persons.id AS id",
  //     "persons.name AS name",
  //     "persons.age AS age",
  //     "hobbies.id AS hobby_id",
  //     "hobbies.name AS hobby_name"
  //   );

  const personsQuery = (
    await db.raw(`
      SELECT
      p.id,
      p.name,
      p.age,
      h.id AS hobby_id,
      h.name AS hobby_name
    FROM persons p
    LEFT JOIN hobbies h
    ON h.persons_id = p.id;
  `)
  )[0];

  //console.log(personsQuery);

  const personsDefinition = [
    {
      id: { column: "id", type: "NUMBER" },
      name: "name",
      age: { column: "age", type: "NUMBER" },
      hobbies: [
        { id: { column: "hobby_id", type: "NUMBER" }, name: "hobby_name" },
      ],
    },
  ];

  const persons = nest(personsQuery, personsDefinition);

  return {
    props: {
      persons,
    },
  };
};

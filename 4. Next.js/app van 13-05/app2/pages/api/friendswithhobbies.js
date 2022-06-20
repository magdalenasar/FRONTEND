import db, { nest } from "../../db";

export default async function handler(req, res) {
  if (req.method === "GET") {
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
    res.send(persons);
  }
}

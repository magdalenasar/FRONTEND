import db from "../../../db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const data = await db.select().from("todos").where("id", req.query.todoId);
    res.send(data);
  }
  if (req.method === "DELETE") {
    await db.delete().from("todos").where("id", req.query.todoId);
    const allTodos = await db.select().from("todos");
    res.send(allTodos);
  }
  if (req.method === "PATCH") {
    await db("todos").update(req.body).where("id", req.query.todoId);
    const allTodos = await db.select().from("todos");
    res.send(allTodos);
  }
};

export default handler;

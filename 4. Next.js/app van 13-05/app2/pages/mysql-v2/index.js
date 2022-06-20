import db from "../../db";
import { parse } from "../../helpers";
const Index = ({ persons }) => {
  return (
    <div>
      <h1>Showing MySQL data with KnexJS</h1>
      <pre>{JSON.stringify(persons, null, 2)}</pre>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  const persons = parse(await db.select("*").from("persons"));
  return {
    props: {
      persons,
    },
  };
};

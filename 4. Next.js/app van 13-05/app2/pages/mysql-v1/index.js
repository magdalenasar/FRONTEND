const mysql = require("mysql");

const Index = ({ results }) => {
  return (
    <div>
      <h1>Showing MySQL data</h1>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  const connection = mysql.createConnection({
    host: "localhost",
    database: "friends",
    user: "root",
    password: "rootpass",
  });
  const getData = () =>
    new Promise((res, rej) => {
      connection.query("SELECT * FROM persons", function (error, results) {
        if (error) rej(error);
        //results
        res(results);
      });
    });
  const results = await getData();
  const objectifiedResults = JSON.parse(JSON.stringify(results));
  console.log(objectifiedResults);
  return {
    props: {
      results: objectifiedResults,
    },
  };
};

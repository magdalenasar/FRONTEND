import { useEffect, useState } from "react";
import axios from "axios";

export function useData(path) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // data ophalen van api
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const {
          data: { records },
        } = await axios(path);
        //  console.log(records);
        setTimeout(() => {
          setData(records);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);
  return [data, loading, error];
}

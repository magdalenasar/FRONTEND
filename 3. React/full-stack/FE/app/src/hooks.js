import { useEffect, useState } from "react";
import axios from "axios";

export function useAxios(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(function () {
    (async () => {
      try {
        setLoading(true);
        const {
          data: { records },
        } = await axios(path);
        setLoading(false);
        setData(records);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);
  return [data, loading, error];
}

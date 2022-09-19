import { useState, useEffect } from "react";

const useFetchJson = (url) => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (!url) return;
      const fetchData = async () => {
         try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
         } catch (err) {
            setError(err);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, [url]);

   return { data, error, loading };
};

export default useFetchJson;

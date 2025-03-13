import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Add this line for debugging
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Add this line for debugging
        setData([]);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;

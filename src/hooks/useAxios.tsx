import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Set error to null instead of an empty string

  axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios(param);
      setResponse(result.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message); // Provide more useful error info
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [param]); // Include param in the dependency array

  return { response, loading, error };
};

export default useAxios;

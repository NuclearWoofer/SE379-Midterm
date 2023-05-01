import { useState } from 'react';

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(url) {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  }

  return {
    loading,
    error,
    fetchData,
  };
}

export default useFetch;

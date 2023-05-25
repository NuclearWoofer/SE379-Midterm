// // useFetch.js

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const baseUrl = 'http://localhost:3000';

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}${url}`);
//         setData(response.data);
//       } catch (error) {
//         setError(`An Error Occurred: ${error}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}${url}`);
      setData(response.data);
    } catch (error) {
      setError(`An Error Occurred: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, fetchData }; // Add fetchData to the returned object
};

export default useFetch;

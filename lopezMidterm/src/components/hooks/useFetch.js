
import { useEffect, useState } from 'react'
import axios from 'axios'


const baseUrl = 'http://localhost:3000/products'
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
    const getData = async () => {
        try {
            const response = await axios.get(`${baseUrl}${url}`);
            setData(response.data);
        } catch (error) {
            setError(`An Error Occured: ${error}`);
        } finally {
            setLoading(false);
        }
    };
    getData();

    }, [url]);

    return{ data, loading, error}
};
export default useFetch;



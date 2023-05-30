import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import React from 'react';

interface FetchResult<T> {
  data: T;
  loading: boolean;
  error: string;
  fetchData: () => Promise<void>;
}

const baseUrl = 'http://localhost:3000';

export const useFetch = <T>(url: string): FetchResult<T[]> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async (): Promise<void> => {
    try {
      const response: AxiosResponse<T[]> = await axios.get<T[]>(`${baseUrl}${url}`);
      setData(response.data);
    } catch (error) {
      setError(`An Error Occurred: ${Error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, fetchData };
};

export default useFetch;

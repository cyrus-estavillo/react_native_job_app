import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const key = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]); // set to an empty array intitially
    const [isLoading, setIsLoading] = useState(false); // set to false initially
    const [error, setError] = useState(null); 

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }, // an object where we spead the query object
    };

    const fetchData = async() => {
        setIsLoading(true); // once we start fetching we want to load it

        try {
            const response = await axios.request(options);

            setData(response.data.data); // set the data to the response data
            console.log(response.data.data);
            setIsLoading(false); // once we get the data we want to stop loading
        } catch (error) {
            setError(error);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    }

    // This function utilizes our fetch data function
    useEffect(() => {
        fetchData();
    }, []);

    // noticed that there were some problems with trying to refetch the data
    // equal to an error function
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;
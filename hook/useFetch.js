import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]); // set to an empty array intitially
    const [isLoading, setIsLoading] = useState(false); // set to false initially
    const [error, setError] = useState(null); 
}
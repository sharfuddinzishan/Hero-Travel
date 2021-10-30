import axios from 'axios';
import { useState, useEffect } from 'react';

export const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        let url = "http://localhost:4000/packages";
        axios.get(url)
            .then(result => setPackages(result.data))
    }, [])
    return [packages, setPackages]
}

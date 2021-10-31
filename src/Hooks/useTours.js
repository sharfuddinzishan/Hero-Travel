import axios from 'axios';
import { useState, useEffect } from 'react';

export const useTours = () => {
    const [allTours, setAllTours] = useState([]);
    useEffect(() => {
        let url = "https://spooky-grave-06095.herokuapp.com/tours";
        axios.get(url)
            .then(result => setAllTours(result.data))
    }, [])
    return [allTours, setAllTours]
}

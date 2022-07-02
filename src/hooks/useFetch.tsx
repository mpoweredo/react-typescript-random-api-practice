import React, { useCallback, useEffect, useState } from "react";
import RandomPersonApiURL from "../data/RandomAPI";

const useFetch = () => {
	const [person, setPerson] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

    const fetchData = useCallback( async () => {
        try {
            setLoading(true)
            const response = await fetch(RandomPersonApiURL);

            if (!response.ok) {
                throw new Error("something went wrong!");
            }

            const data = await response.json();

            setPerson(data.results[0]);
            setLoading(false)
        } catch (error: any) {
            setError(error.message)
        }
    }, [])


	return { person, error, loading, fetchData };
};

export default useFetch;

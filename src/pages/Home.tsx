import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";

import { Person } from '../types/index'
import RandomPersonList from "../components/content/RandomPersonList";

const Home = () => {
	const [peopleList, setPeopleList] = useState([] as any);
	const { person, loading, fetchData } = useFetch();

	useEffect(() => {
		setPeopleList((prevList: Person[]) => {
			if (Object.keys(person).length === 0) {
                return prevList
			} else {
                return [...prevList, person]
            }
		});
	}, [person]);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const addPersonHandler = () => {
        fetchData()
    }

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<RandomPersonList items={peopleList} />
			{loading && <CircularProgress />}
            <button style={{fontSize: '1.15em'}} onClick={addPersonHandler} >Add person</button>
		</div>
	);
};

export default Home;

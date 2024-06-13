import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import axios from 'axios';

type Item = {
	_id: string;
	title: string;
	description: string;
	imageUrl: string;
	price: number;
	userId: string;
};

export default function Home() {
	/* TEST 
    const [items, setItems ] =useState<Item[]>([])
    useEffect(() =>{
            axios.get('http://localhost:3000/api/stuff')
            .then(res =>{
                setItems(res.data)
            })
            .catch(error =>{
                console.error("error", error)
            })

    }, [])
	*/
	return (
		<div>
			<Header />
		</div>
	);
}

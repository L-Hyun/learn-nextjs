import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

export default function Home() {
	const [list, setList] = useState([]);
	const API_URL =
		"http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

	function getData() {
		axios.get(API_URL).then((res) => {
			setList(res.data);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Head>
				<title>Learn-Next.js | L-Hyun</title>
			</Head>
			<div>Index</div>
			<ItemList list={list} />
		</>
	);
}

/*
_app.js나 각 페이지에서 Head 태그를 통해서 html문서의 head부분 수정 가능
*/

import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Item } from "semantic-ui-react";

const Post = () => {
	const router = useRouter();
	const { id } = router.query;

	const [item, setItem] = useState({});

	const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

	function getData() {
		Axios.get(API_URL).then((res) => {
			setItem(res.data);
		});
	}

	useEffect(() => {
		if (id && id > 0) {
			getData();
		}
	}, [id]);

	return <Item item={item} />;
};

export default Post;

/*
Dynamic Route
- [].js로 라우팅 받을 변수 저장
 */

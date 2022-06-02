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

/**
 * Pre-Rendering
 * - 정적 생성
 * - Server Side Rendering
 *
 * [정적 생성]
 * - 프로젝트가 빌드되는 시점에 html 파일 생성
 * - 모든 요청에 재사용
 * - 퍼포먼스 좋음
 * - NEXT.js는 이를 권고
 * - 파일은 CDN에 캐시
 *
 * [서버 사이드 렌더링]
 * - 매 요청마다 html 생성
 */

/**
 * index페이지에서는 굳이 서버 사이드 렌더링이 필요하지 않음
 * 리스트 값만 API
 *
 * 상세페이지는 서버 사이드 렌더링 필요
 * 상세페이지는 껍데기에 아무것도 없고, API를 호출한 다음 상품 이름이나 이런 것들이 생김
 * SEO나 외부에서 볼 때 링크만으로는 아무것도 확인할 수 없음
 * -> 서버사이드렌더링으로 미리 가져오기
 */

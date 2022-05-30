import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../components/Footer";
import Top from "../components/Top";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Top />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;

/*
- _app.js 역할
- 페이지 전환 시 레이아웃 유지
- 페이지 전환 시 상태값 유지
- 커스텀 에러 핸들링
- 추가적 데이터를 페이지로 주입
- 글로벌 CSS 선언
*/

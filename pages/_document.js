import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="ko">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

/*
html, body같은 부분을 수정하려면 이 파일이 항상 있어야 함
app은 글로벌 css, layout 등을 작업
document는 서버에서만 렌더링
title같은 속성은 각 페이지에서 Head를 import해서 작어해야 함
*/

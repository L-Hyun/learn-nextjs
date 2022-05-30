import { Header } from "semantic-ui-react";
import Gnb from "./GNB";
import css from "styled-jsx/css";

const style = css`
	div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 70px;
	}

	img {
		width: 200px;
		height: 70px;
	}
`;

export default function Top() {
	return (
		<>
			<div>
				<img src="/imgs/L-Hyun.png" alt="L-Hyun" />
				<Header as="h1">L-Hyun, learn-nextjs</Header>
			</div>
			<Gnb />
			<style jsx>{style}</style>
		</>
	);
}

/*
public 폴더
- Assets 저장
- robots.txt 저장
*/

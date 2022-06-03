function Error({ statusCode }) {
	return (
		<p>
			{statusCode
				? `An error ${statusCode} occurred on server`
				: "An error occurred on client"}
		</p>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;

/**
 * 서버에 에러를 보내는 경우도 있기 때문에 정적으로 생성하지 않음
 * 404는 정적으로 제공하는 것이 효율적이기 때문에 404.js는 사용
 */

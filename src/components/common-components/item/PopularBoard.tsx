import { useEffect, useState } from 'react';

const PopularBoard = () => {
	const [popularArticle, setPopularArticle] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => {
				//인기 게시물은 서버로부터 10개의 데이터만 받는다고 가정.
				const popularArticleData = json.slice(0, 4);
				setPopularArticle(popularArticleData);
			});
	}, []);

	const truncateTitle = (title: string) => title.slice(0, 15) + '...';

	return (
		<>
			{popularArticle && (
				<>
					<div className="popular_board_container">
						<div className="popular_board_title">인기 게시물</div>
						<div className="popular_board_content_box x mandatory-scroll-snapping">
							{popularArticle.map(content => (
								<div className="popular_board_content">
									<div className="popular_board_content_title">{truncateTitle(content?.title)}</div>
									<div className="popular_board_content_body">{truncateTitle(content?.body)}</div>
								</div>
							))}
							<div>더보기</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default PopularBoard;

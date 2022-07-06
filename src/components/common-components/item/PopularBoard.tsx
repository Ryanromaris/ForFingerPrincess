import { useEffect, useState } from 'react';

const PopularBoard = () => {
	const [aa, setaa] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setaa(json));
	}, []);

	console.log(aa);

	return (
		<>
			{aa && (
				<>
					<div className="popular_board_container">
						<div className="popular_board_title">인기 게시물</div>
						<div className="popular_board_content_box x mandatory-scroll-snapping">
							{/* {console.log(typeof aa[0].title)} */}
							{/* {aa.map(content => (
								<div className="popular_board_content">
									<div className="popular_board_content_title">{content?.title}</div>
								</div>
							))} */}
						</div>
					</div>
					<div className="popular_board_container">
						<div className="popular_board_title">인기 게시물</div>
						<div className="popular_board_content_box x mandatory-scroll-snapping">
							<div className="popular_board_content">
								<div className="popular_board_content_title">
									제목입니다.
									<br />
									ㅁㅁㅁㅁㅁㅁㅁㅁㅁasdasdasdasdasㅁㅁㅁㅁ
								</div>
								<div className="popular_board_content_body">
									내용입니다.ㅁㅁㅁㅁㅁㅁㅁasdasdasdasdsadasasddasㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
								</div>
							</div>
							<div className="popular_board_content">
								<div className="popular_board_content_title">
									제목입니다.ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
								</div>
								<div className="popular_board_content_body">
									내용입니다.ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
								</div>
							</div>
							<div className="popular_board_content">
								<div className="popular_board_content_title">
									제목입니다.ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
								</div>
								<div className="popular_board_content_body">
									내용입니다.ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ \aaa
								</div>
							</div>
							<div className="popular_board_content">
								<div className="popular_board_content_title">
									제목입니다.ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
								</div>
								<div className="popular_board_content_body">
									내용입니다.ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
								</div>
							</div>
						</div>
					</div>
					<div className="popular_board_container">
						<div className="popular_board_title">인기 게시물</div>
						<div className="popular_board_content_box x mandatory-scroll-snapping">
							<div className="popular_board_content"></div>
							<div className="popular_board_content"></div>
							<div className="popular_board_content"></div>
							<div className="popular_board_content"></div>
							<div className="popular_board_content"></div>
						</div>
					</div>
					<div className="popular_board_container">
						<div className="popular_board_title">인기 게시물</div>
						<div className="popular_board_content_box x mandatory-scroll-snapping">
							<div className="popular_board_content"></div>
							<div className="popular_board_content"></div>
							<div className="popular_board_content"></div>
							<div className="popular_board_content"></div>
							<div className="popular_board_content"></div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default PopularBoard;

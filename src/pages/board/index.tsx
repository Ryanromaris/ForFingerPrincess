import Layout from '../../components/layout/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';

enum BOARD_KEY {
	ALL = 'ALL',
	HAIR = 'HAIR',
	HEALTH = 'HEALTH',
}

interface IArticle {
	id: number;
	body: string;
}

const Board = ({ articles }: any) => {
	const [category, setCategory] = useState(BOARD_KEY.ALL);
	console.log(articles);
	return (
		<>
			<Layout category={category} changeBoard={setCategory}>
				{category === BOARD_KEY.ALL && (
					<>
						<div className="article_container">
							{articles?.map((article: IArticle) => (
								<div className="article_individual" key={article.id}>
									<div className="article_row_1">
										<div>작성자:{article.id}</div>
										<div>2022.07.12</div>
									</div>
									<div
										className="article_row_2"
										dangerouslySetInnerHTML={{ __html: article.body }}
									></div>

									<div className="article_row_3">좋아요, 답글 개수</div>
								</div>
							))}
						</div>
					</>
				)}
				{category === BOARD_KEY.HAIR && <div>헤어 게시판</div>}
				{category === BOARD_KEY.HEALTH && <div>헬스 게시판</div>}
			</Layout>
		</>
	);
};

export async function getStaticProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const articles = await res.json();

	return { props: { articles } };
}

export default Board;

import { useRecoilState, useRecoilValue } from 'recoil';
import Layout from 'src/components/layout/Layout';
import { counting, selectArticle } from '../store';

const Search = () => {
	const [count, setCount] = useRecoilState(counting);

	const handleIncrease = () => {
		setCount(prev => prev + 1);
	};

	const selectArticles = useRecoilValue(selectArticle);

	return (
		<Layout>
			<>
				<span>{count}</span>
				<button onClick={handleIncrease}>increase</button>

				{selectArticles.map(article => (
					<>
						<div>id: {article.id}</div>
						<div>content: {article.content}</div>
					</>
				))}
			</>
		</Layout>
	);
};

export default Search;

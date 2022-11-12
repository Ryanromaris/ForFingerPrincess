import { atom, useRecoilState } from 'recoil';
import Layout from 'src/components/layout/Layout';
import { counting } from '../store';

const Search = () => {
	const [count, setCount] = useRecoilState(counting);

	// console.log('recoild count :', count);
	const handleIncrease = () => {
		setCount(prev => prev + 1);
	};

	return (
		<Layout>
			<span>{count}</span>
			<button onClick={handleIncrease}>increase</button>
		</Layout>
	);
};

export default Search;

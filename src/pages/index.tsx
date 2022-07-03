import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
	return (
		<Layout hasLogoBar={true}>
			<div>Hello</div>
		</Layout>
	);
};

export default Home;

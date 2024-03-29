import type { NextPage } from 'next';
import Layout from 'src/components/layout/Layout';
import PopularBoard from 'src/components/common-components/item/PopularBoard';

const Home: NextPage = () => {
	return (
		<>
			<Layout hasLogoBar={true}>
				<PopularBoard />
			</Layout>
		</>
	);
};

export default Home;

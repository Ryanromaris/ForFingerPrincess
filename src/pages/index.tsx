import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="For Finger Princess" content="Generated by create next app" />
			</Head>

			<main className={styles.main}>Hello</main>
			<footer></footer>
		</div>
	);
};

export default Home;
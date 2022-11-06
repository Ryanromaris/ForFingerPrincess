import 'src/styles/globals.css';
import type { AppContext, AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
	let pageProps = {};
	// 하위 컴포넌트에 getInitialProps가 있다면 추가 (각 개별 컴포넌트에서 사용할 값 추가)
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// _app에서 props 추가 (모든 컴포넌트에서 공통적으로 사용할 값 추가)
	pageProps = { ...pageProps, posttt: { title: 11111, content: 3333 } };

	return { pageProps };
};

export default MyApp;

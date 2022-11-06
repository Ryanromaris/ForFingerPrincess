import { useEffect, useState } from 'react';
import Layout from 'src/components/layout/Layout';
// import { StreamChat } from 'stream-chat';
// import { useEffect, useState } from 'react';
// import { Channel, ChannelHeader, Window, Chat, MessageInput, MessageList } from 'stream-chat-react';

// const client = StreamChat.getInstance('b5vauvu5g347');

const Chatting = () => {
	// console.log('------from SSR', pageProps);
	// const [channel, setChannel] = useState();
	// useEffect(() => {
	// 	(async () => {
	// 		await client.setGuestUser({
	// 			id: String(Math.floor(Math.random() * Date.now())),
	// 			name: 'Jerry',
	// 		});

	// 		const channel = await client.channel('public-chat', 'Jerry', {
	// 			name: 'Jerry Chat Channel!',
	// 		});
	// 		console.log('??', channel);
	// 		setChannel(channel);
	// 	})();
	// 	return () => {
	// 		client.disconnectUser();
	// 	};
	// }, []);

	// if (!channel) {
	// 	return null;
	// }

	const [testValueForSetInterval, setTestValueForSetInterval] = useState(0);

	useEffect(() => {
		console.log('test what is window', window);
		let testInterval = setInterval(() => {
			setTestValueForSetInterval(prev => prev + 1);
		}, 1000);
		return () => clearInterval(testInterval);
	}, []);

	return (
		// <Chat client={client}>
		// 	<Channel channel={channel}>
		// 		<Window>
		// 			<ChannelHeader />
		// 			<MessageList />
		// 			<MessageInput />
		// 		</Window>
		// 	</Channel>
		// </Chat>
		<Layout hasLogoBar={false}>
			<>
				<div>이 페이지에 들어온지 {testValueForSetInterval}초 지남</div>
				<div>채팅기능 개발중입니다.</div>
			</>
		</Layout>
	);
};

export default Chatting;

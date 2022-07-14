import Layout from '../components/layout/Layout';
import { StreamChat } from 'stream-chat';
import { useEffect, useState } from 'react';
import { Channel, ChannelHeader, Window, Chat, MessageInput, MessageList } from 'stream-chat-react';

const client = StreamChat.getInstance('b5vauvu5g347');

const Chatting = () => {
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
		<Layout>채팅기능 개발중입니다.</Layout>
	);
};

export default Chatting;

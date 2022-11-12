import { atom } from 'recoil';

export const user = atom({
	key: 'user',
	default: {
		id: 'Admin',
		pwd: 'Admin',
	},
});

export const counting = atom({
	key: 'counting',
	default: 0,
});

export const article = atom({
	key: 'article',
	default: [
		{ id: 1, content: 'test1', author: 'Jerry' },
		{ id: 2, content: 'test2', author: 'Jerry' },
		{ id: 3, content: 'test3', author: 'Jerry' },
	],
});

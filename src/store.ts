import { atom, selector } from 'recoil';

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

export const selectStatus = atom({
	key: 'nowStatus',
	default: 1,
});

export const selectArticle = selector({
	key: 'selectArticle',
	get: ({ get }) => {
		const originalToDos = get(article);
		const nowStatus = get(selectStatus);
		return originalToDos.filter(article => article.id > nowStatus);
	},
});

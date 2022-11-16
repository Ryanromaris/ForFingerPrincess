import React, { useState } from 'react';
import Layout from 'src/components/layout/Layout';

/* 
  컴포넌트 단위로 Memo를 걸어주면, 해당 컴포넌트는 해당 컴포넌트의 props가 변동되지 않는 이상 외부에
  의해 리렌더링이 일어나지 않아, 성능 최적화에 도움을 줄수 있다.
*/

/*
  Memo로 쌓여진 MemoTestOne는 상위 컴포넌트가 리렌더링 됨에도 재리렌더링 되지 않는다.
*/
const StudyMemo = () => {
	console.log('rerendered main page');

	const [testValue, setTestValue] = useState<number>(0);
	return (
		<Layout>
			<>
				<button
					onClick={() => {
						setTestValue(testValue + 1);
					}}
				>
					증가버튼
				</button>
				<MemoTestOne />
				<MemoTestTwo testValue={testValue} />
			</>
		</Layout>
	);
};

export default StudyMemo;

type Props = {
	testValue: number;
};

const MemoTestOne = React.memo(() => {
	console.log('rerendered page1');
	return (
		<>
			<div>안녕하세여~~ 이 페이지는 변동되는 값이 없어욥</div>
		</>
	);
});

const MemoTestTwo = ({ testValue }: Props) => {
	console.log('rerendered page2');
	return (
		<>
			<div>{testValue}</div>
		</>
	);
};

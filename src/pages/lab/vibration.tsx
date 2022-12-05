import React, { useEffect, useState } from 'react';
import Layout from 'src/components/layout/Layout';

/* 
 safari 지원 안됨,
 ios에서 아직 지원되지 않는것으로 확인
*/
const Vibration = () => {
	const vibrate = () => {
		if (!window) return;
		window.navigator.vibrate(200);
		console.log('window', window.navigator);
	};

	return (
		<Layout>
			<>
				<button onClick={() => vibrate()}>진동!</button>
			</>
		</Layout>
	);
};

export default Vibration;

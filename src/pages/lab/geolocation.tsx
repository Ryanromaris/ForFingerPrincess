import React, { useEffect, useState } from 'react';
import Layout from 'src/components/layout/Layout';
import useGeolocation from 'src/hooks/useGeolocation';

/* 
 geolocation 훅을 이용하여 지리정보 LOADING, 완료 시의 분기처리가 가능.
 
*/
const Geolocation = () => {
	const initialLocation = useGeolocation();

	console.log('initialLocation', initialLocation);

	return (
		<Layout>
			<>
				<div>현재 위도 경도??</div>
				<div>{`${initialLocation.coordinates?.lat},${initialLocation.coordinates?.lat} `}</div>
				<button>위치 찍기</button>
			</>
		</Layout>
	);
};

export default Geolocation;

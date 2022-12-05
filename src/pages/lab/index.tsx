import Link from 'next/link';
import Layout from 'src/components/layout/Layout';
import StudyMemo from 'src/pages/lab/studyMemo';

const Lab = () => {
	return (
		<Layout>
			<Link href={'/lab/studyMemo'}>Study Memos</Link>
			<Link href={'/lab/vibration'}>Study Vibration Api</Link>
			<Link href={'/lab/geolocation'}>Study Geolocation Api</Link>
		</Layout>
	);
};

export default Lab;

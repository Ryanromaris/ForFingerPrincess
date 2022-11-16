import Link from 'next/link';
import Layout from 'src/components/layout/Layout';
import StudyMemo from 'src/pages/lab/studyMemo';

const Lab = () => {
	return (
		<Layout>
			<Link href={'/lab/studyMemo'}>Study Memos</Link>
		</Layout>
	);
};

export default Lab;

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

const PopularBoard = () => {
	return (
		<>
			<Flicking circular={true}>
				<div className="slide_component">1</div>
				<div className="slide_component">1</div>
				<div className="slide_component">1</div>
				<div className="slide_component">1</div>
				<div className="slide_component">1</div>
				<div className="slide_component">1</div>
			</Flicking>
		</>
	);
};

export default PopularBoard;

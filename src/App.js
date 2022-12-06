import './App.css';

import Navbar from './components/Navbar';
import Rating from './components/Rating';
import VisitorCounter from './components/VisitorCounter';
import dataArr from './data';

const data = dataArr.map((ele, idx) => {
	return (
		<Rating key={idx} {...ele} />
	)
})

function App() {
		return (
		<div className="webPage">
			<div className="nav">
				<Navbar />
			</div>

			<div className="ratingAndCounterWrapper">
				<div className="ratingContainer">
					<section>{data}</section>
				</div>
				<div className="counterContainer">
					<VisitorCounter />
				</div>
			</div>

		</div>
	);
}

export default App;

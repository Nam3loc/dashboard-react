import './App.css';

import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import SentimentAnalysis from './components/SentimentAnalysis';
import VisitorCounter from './components/VisitorCounter';

function App() {
	return (
		<>
		<Navbar />
		<Reviews />
		<AverageRating />
		<SentimentAnalysis />
		<VisitorCounter />
		</>
	);
}

export default App;

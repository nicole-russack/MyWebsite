import { Nav } from './nav';
import Main from '/Users/nicolerussack/nicole-russack-webpage/src/Pages/js/Main.js';
import NavProvider from './context/NavContext';
import './App.css';

function App() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<Main />
			</NavProvider>
		</div>
	);
}

export default App;
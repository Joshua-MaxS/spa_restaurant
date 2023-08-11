import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { useState } from 'react';
import { Delivery } from './components/Delivery';
import { TopPicks } from './components/TopPicks';
import { Meal } from './components/Meal';
import { Categories } from './components/Categories';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div className={darkMode && 'dark'}>
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			<main className='bg-gray-200 dark:bg-gray-950 text-gray-900 dark:text-white'>
				<Features />
				<Delivery />
				<TopPicks />
				<Meal />
				<Categories />
			</main>
		</div>
	);
}

export { App };

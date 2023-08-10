import { Navbar } from './components/Navbar';
import { useState } from 'react';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div className={darkMode && 'dark'}>
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			<main className='bg-gray-200 dark:bg-gray-950 text-gray-900 dark:text-white'></main>
		</div>
	);
}

export { App };

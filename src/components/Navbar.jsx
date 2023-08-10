import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { TbTruckReturn } from 'react-icons/tb';
import { FaGoogleWallet } from 'react-icons/fa';
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';

import { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
	const [sideNav, SetSideNav] = useState(false);

	return (
		<div className='max-w-[1520px] mx-auto flex justify-between items-center p-4 bg-white dark:bg-gray-950'>
			<div className='flex items-center text-black dark:text-white'>
				<div onClick={() => SetSideNav(!sideNav)} className='cursor-pointer'>
					<AiOutlineMenu size={25} />
				</div>

				<h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
					Dely
					<span className='text-red-700 font-bold dark:text-blue-900 font-bold'>
						Food
					</span>
				</h1>

				<div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]'>
					<p className='bg-red-700 dark:bg-blue-900 text-white rounded-full p-2 text-bold'>
						Free
					</p>

					<p className='p-2 text-bold dark:text-black'>Delivery</p>
				</div>
			</div>

			<div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
				<AiOutlineSearch size={25} />

				<input
					type='text'
					className='bg-transparent p-2 w-full focus:outline-none'
					placeholder='search meals'
				/>
			</div>

			<div className='hidden md:flex items-center text-black dark:text-white'>
				<div
					onClick={() => {
						setDarkMode(!darkMode);
					}}
					className='pr-5'
				>
					{darkMode ? (
						<MdLightMode className='cursor-pointer text-3xl ' />
					) : (
						<MdDarkMode className='text-3xl cursor-pointer' />
					)}
				</div>

				<button className='bg-red-700 dark:bg-blue-900 text-white items-center py-2 px-4 rounded-full hidden md:flex'>
					<BsFillCartFill size={20} />
					cart
				</button>
			</div>
			{sideNav ? (
				<div
					className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
					onClick={() => SetSideNav(!sideNav)}
				></div>
			) : (
				''
			)}
			<div
				className={
					sideNav
						? 'fixed top-0 left-0 w-[300px] h-screen bg-white dark:bg-gray-950 z-10 duration-300'
						: 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
				}
			>
				<AiOutlineClose
					size={25}
					onClick={() => SetSideNav(!sideNav)}
					className='cursor-pointer absolute right-4 top-4 text-black dark:text-white'
				/>
				<h2 className='text-2xl p-4 text-black dark:text-white'>
					Dely
					<span className='text-red-700 font-bold dark:text-blue-900'>
						Food
					</span>
				</h2>

				<nav>
					<ul className='flex flex-col p-4 text-gray-900 dark:text-gray-200'>
						<li className='text-xl py-4 flex'>
							<BsPerson
								size={25}
								className='mr-4 text-white bg-black rounded-full dark:text-black dark:bg-gray-200'
							/>
							My Account
						</li>

						<li className='text-xl py-4 flex'>
							<TbTruckReturn
								size={25}
								className='mr-4 text-white bg-black rounded-full dark:text-black dark:bg-gray-200'
							/>
							Delivery
						</li>

						<li className='text-xl py-4 flex'>
							<MdOutlineFavorite
								size={25}
								className='mr-4 text-white bg-black rounded-full dark:text-black dark:bg-gray-200'
							/>
							My Favorite
						</li>

						<li className='text-xl py-4 flex'>
							<FaGoogleWallet
								size={25}
								className='mr-4 text-white bg-black rounded-full dark:text-black dark:bg-gray-200'
							/>
							My Wallet
						</li>

						<li className='text-xl py-4 flex'>
							<MdHelp
								size={25}
								className='mr-4 text-white bg-black rounded-full dark:text-black dark:bg-gray-200'
							/>
							Help
						</li>

						<div
							onClick={() => {
								setDarkMode(!darkMode);
							}}
							className=' pt-10 pl-[40%] md:hidden lg:hidden'
						>
							{darkMode ? (
								<MdLightMode className='cursor-pointer text-3xl ' />
							) : (
								<MdDarkMode className='text-3xl cursor-pointer' />
							)}
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export { Navbar };

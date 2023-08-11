import { mealData } from '../data/data';
import { useState } from 'react';

const Meal = () => {
	const [foods, setFoods] = useState(mealData);

	const filterCat = (category) => {
		setFoods(
			mealData.filter((item) => {
				return item.category === category;
			})
		);
	};
	return (
		<div className='max-w-[1520px] m-auto px-4 py-12'>
			<h1 className='text-red-700 dark:text-blue-800 font-bold text-2xl text-center py-2'>
				Our Meal
			</h1>

			<div className='flex flex-col lg:flex-row justify-center'>
				<div className='flex justify-center md:justify-center'>
					<button
						onClick={() => setFoods(mealData)}
						className='m-1 border-2 border- border-red-700 dark:border-blue-800 text-white bg-red-700 dark:bg-blue-800  hover:bg-white dark:hover:bg-white hover:text-red-700 hover:dark:text-blue-800   rounded-xl px-2'
					>
						All
					</button>

					<button
						onClick={() => filterCat('pizza')}
						className='m-1 border-2 border- border-red-700 dark:border-blue-800 text-white bg-red-700 dark:bg-blue-800  hover:bg-white dark:hover:bg-white hover:text-red-700 hover:dark:text-blue-800   rounded-xl px-2'
					>
						Pizza
					</button>

					<button
						onClick={() => filterCat('chicken')}
						className='m-1 border-2 border- border-red-700 dark:border-blue-800 text-white bg-red-700 dark:bg-blue-800  hover:bg-white dark:hover:bg-white hover:text-red-700 hover:dark:text-blue-800   rounded-xl px-2'
					>
						Chicken
					</button>

					<button
						onClick={() => filterCat('salad')}
						className='m-1 border-2 border- border-red-700 dark:border-blue-800 text-white bg-red-700 dark:bg-blue-800  hover:bg-white dark:hover:bg-white hover:text-red-700 hover:dark:text-blue-800   rounded-xl px-2'
					>
						Salad
					</button>
				</div>
			</div>

			<div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
				{foods.map((item) => (
					<div
						key={item.id}
						className='border-none hover:scale-105 duration-300'
					>
						<img
							src={item.image}
							alt={item.name}
							className='w-full h-[200px] object-cover rounded-lg'
						/>
						<div className='flex justify-between py-4 px-2'>
							<p className='font-bold'>{item.name}</p>
							<p className='bg-red-800 dark:bg-blue-900 h-16 w-16 rounded-full text-white px-2 -mt-10 py-3 border-8 font-bold'>
								{item.price}
							</p>
						</div>

						<div className='pl-2 py-4 -my-7'>
							<p className='flex items-center text-red-800 dark:text-indigo-700'>
								View More ➔
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export { Meal };

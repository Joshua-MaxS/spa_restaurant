import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='max-w-[1520px] m-auto px-4 py-2 bg-gray-900'>
			<div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
				<div>
					<h1 className='w-full text-3xl font-bold text-blue-800 dark:text-red-700'>
						YourFood
					</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
						consectetur, tenetur eos necessitatibus repudiandae nemo
						consequuntur, quae alias enim libero rerum dolorem explicabo
						perferendis et corrupti eum quidem, nisi deleniti! Debitis commodi.
					</p>
					<div className='flex justify-between md:w-[75%] my-6 '>
						<FaDribbbleSquare
							size={30}
							className='hover:scale-110 duration-300 hover:text-blue-700 dark:hover:text-red-700 cursor-pointer'
						/>
						<FaFacebookSquare
							size={30}
							className='hover:scale-110 duration-300 hover:text-blue-700 dark:hover:text-red-700 cursor-pointer'
						/>
						<FaInstagramSquare
							size={30}
							className='hover:scale-110 duration-300 hover:text-blue-700 dark:hover:text-red-700 cursor-pointer'
						/>
						<FaTwitterSquare
							size={30}
							className='hover:scale-110 duration-300 hover:text-blue-700 dark:hover:text-red-700 cursor-pointer'
						/>
					</div>
				</div>

				<div className='lg:col-span-2 flex justify-evenly mt-6'>
					<div>
						<h6 className='font-bold text-gray-500'>Location</h6>

						<ul>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								USA
							</li>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Canada
							</li>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Brasil
							</li>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Perú
							</li>
						</ul>
					</div>

					<div>
						<h6 className='font-bold text-gray-500'>About</h6>

						<ul>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								US
							</li>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Delivery
							</li>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Meal
							</li>
						</ul>
					</div>

					<div>
						<h6 className='font-bold text-gray-500'>Store</h6>

						<ul>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Dishes
							</li>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Glasses
							</li>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Bowl
							</li>
							<li className='py-2 text-sm cursor-pointer hover:scale-125 hover:text-blue-500 dark:hover:text-red-500'>
								Napkins
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Footer };

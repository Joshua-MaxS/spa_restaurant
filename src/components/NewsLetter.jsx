const NewsLetter = () => {
	return (
		<div className='max-w-[1520px] m-auto text-white bg-[#24262b] dark:bg-gray-900'>
			<div className='mx-auto grid lg:grid-cols-3 '>
				<div className='lg:col-span-2 my-4'>
					<h1>Need advice on how to improve your flow?</h1>

					<p>Sign Up to join our NewsLetter and stay up to date.</p>
				</div>

				<div className='my-4 lg:mr-4'>
					<div className='flex flex-col sm:flex-row items-center justify-between w-full'>
						<input
							type='email'
							placeholder='your email'
							className='p-3 flex w-full rounded-md text-black'
						/>
						<button className='bg-blue-700 dark:bg-red-600 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none'>
							Notify me
						</button>
					</div>
					<p>
						we are concerned about the security of your data, Read {''}
						<span className='text-blue-500 dark:text-red-400 cursor-pointer'>
							Pricavy Policy
						</span>
					</p>
				</div>

				<hr className='my-8 bg-gray-700 border-1 gark:bg-gray-700' />
			</div>
		</div>
	);
};

export { NewsLetter };

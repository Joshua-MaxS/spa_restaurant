const Delivery = () => {
	return (
		<div className='w-full py-16 px-4'>
			<h3 className='text-red-800 dark:text-blue-900 font-bold text-2xl text-center'>
				Quick Delivery App
			</h3>
			<div className='w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-center'>
				<img
					src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
					alt=''
					className='w-[500px] h-auto mx-auto my-4 md:w-[50%] md:ml-8 md:my-0'
				/>
				<div className='flex flex-col justify-center md:flex-1'>
					<p className='text-[#293dc2] dark:text-red-600 font-bold'>
						Get the app
					</p>
					<h3 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						Limitless Convenience on Demand
					</h3>
					<p className='mb-4'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
						veritatis eligendi quod adipisci molestiae, dignissimos deserunt
						reiciendis, voluptate quis corrupti iusto enim velit, vitae quaerat
						harum odit nemo ea esse. Reprehenderit iure adipisci asperiores
						veritatis quaerat, eaque iste quisquam sint inventore architecto
						consequuntur quasi debitis ab autem. Suscipit perspiciatis quaerat
						repudiandae, consectetur doloremque quam quasi similique incidunt!
						Repellendus, nulla tenetur! Officiis ipsa aliquid perspiciatis
						quibusdam nesciunt, molestias, vitae distinctio quos, sed temporibus
						ipsam! Illum velit expedita vel adipisci magni explicabo eveniet
						illo, necessitatibus voluptatem, ad cum earum sint, vitae
						perferendis!
					</p>
					<button className='bg-black text-gray-200 dark:text-sky-200 w-[200px] rounded-md font-medium my-6 md:my-0 mx-auto md:mx-0 py-3 hover:scale-110 duration-500'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export { Delivery };

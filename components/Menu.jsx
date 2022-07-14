import React from 'react'

const Menu = () => {
	return (
		<main className='flex flex-col lg:flex-row justify-center items-center lg:items-start pt-40 pb-40 bg-[#f1f1f1]'>
			{/* <!-- left --> */}
			<div className='flex flex-col lg:mr-12 text-center sm:text-left'>
				<h1 className='font-Playfair text-5xl text-center lg:text-left'>Food Menu</h1>

				<div className='flex justify-between items-center pt-8'>
					<p className='text-xl uppercase mr-24 pt-2 font-Sintony'>ULTIMATE ORGANIC FRUIT SALAD</p>
					<span className='text-2xl uppercase mr-20 font-Playfair'>$50.00</span>
				</div>
				<p className='text-[#5c6369] pb-5 border-b-[3px] border-[#e6e6e6] font-Sintony '>
					survived not only five centuries but the leap
				</p>
				<div className='flex justify-between items-center pt-8'>
					<p className='text-xl uppercase mr-24 pt-2 font-Sintony'>ULTIMATE ORGANIC FRUIT SALAD</p>
					<span className='text-2xl uppercase mr-20 font-Playfair'>$50.00</span>
				</div>
				<p className='text-[#5c6369] pb-5 border-b-[3px] border-[#e6e6e6] font-Sintony '>
					survived not only five centuries but the leap
				</p>
				<div className='flex justify-between items-center pt-8'>
					<p className='text-xl uppercase mr-24 pt-2 font-Sintony'>ULTIMATE ORGANIC FRUIT SALAD</p>
					<span className='text-2xl uppercase mr-20 font-Playfair'>$50.00</span>
				</div>
				<p className='text-[#5c6369] pb-5 border-b-[3px] border-[#e6e6e6] font-Sintony '>
					survived not only five centuries but the leap
				</p>
				<div className='flex justify-between items-center pt-8'>
					<p className='text-xl uppercase mr-24 pt-2 font-Sintony'>ULTIMATE ORGANIC FRUIT SALAD</p>
					<span className='text-2xl uppercase mr-20 font-Playfair'>$50.00</span>
				</div>
				<p className='text-[#5c6369] pb-5 font-Sintony '>
					survived not only five centuries but the leap
				</p>

				<div>
					<button className='p-4'>EXPLOR FOOD MENU</button>
				</div>
			</div>
			{/* <!-- right --> */}
			<div>
				<h1 className='font-Playfair text-5xl text-center lg:text-left mt-12 lg:mt-0'>
					Today Special
				</h1>
				<div className='flex bg-[#f1f1f1] mt-16 ml-12 sm:ml-0'>
					<div className='bg-white z-10 shadow-xl'>
						<img className='w-[320px] h-[210px]' src='/assets/pizza-1.avif' alt='' />
						<div className='pt-4 pb-8 ml-6'>
							<p className='text-lg'>Pizza Marinara</p>
							<span className='text-lg'>$89.00</span>
						</div>
					</div>

					<div className='bg-white relative top-[10px] left-[-50px] shadow-xl'>
						<img className='w-[320px] h-[172px]' src='/assets/pizza-1.avif' alt='' />
						<div className='pt-4 ml-6'>
							<p className='text-lg'>Pizza Marinara</p>
							<span className='text-lg'>$89.00</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Menu

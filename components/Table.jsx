import React from 'react'
import { BsQuestionSquare } from 'react-icons/bs'

const Table = () => {
	return (
		<main className=' bg-[#7d8587] pt-20 pb-20'>
			<div className='flex justify-between items-center lg:w-[1240px] mx-auto'>
				<div>
					<img
						className='hidden lg:block w-[293px] h-[293px] translate-y-[-130px]'
						src='/assets/pizza-1.avif'
						alt=''
					/>
				</div>
				<div className='text-center mx-4 sm:mx-0'>
					<h1 className=' text-5xl font-Playfair pb-10 text-white'>Reserve your table</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6  '>
						<input className='px-4 py-3' type='text' placeholder='Name*' size={30} />
						<input className='px-4 py-3' type='email' placeholder='Email address*' />
						<input className='px-4 py-3' type='time' placeholder='Time*' />
						<input className='px-4 py-3' type='date' placeholder='Date*' />
						<input className='px-4 py-3' type='text' placeholder='Guests*' />
						<input className='px-4 py-3' type='tel' placeholder='Phone*' />
					</div>
					<div className='flex sm:flex-row flex-col sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 pt-8'>
						<button className='px-4 py-3'>Make reservation</button>
						<div className='uppercase text-center font-Sintony text-md'>
							<p className='text-white'>you can also call</p>
							<p className='text-pink-500 '>for a reservation</p>
						</div>
						<p className='text-xl text-white font-Sintony'>1-007 000 005</p>
					</div>
				</div>
				<div>
					<img
						className=' hidden lg:block w-[241px] h-[234px] translate-y-48'
						src='/assets/pizza-1.avif'
						alt=''
					/>
				</div>
			</div>
		</main>
	)
}

export default Table

import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { TbCircleDot } from 'react-icons/tb'
import { BsQuestionSquare } from 'react-icons/bs'

const Reviews = () => {
	return (
		<main className='bg-[#f1f1f1] pt-20'>
			<div className='lg:w-[1240px] mx-auto'>
				<h1 className='text-center text-5xl pb-24 font-Playfair'>Happy Clients</h1>
				<div className='flex flex-col md:flex-row justify-center sm:space-x-8 px-2 md:px-0'>
					<img className=' hidden lg:block w-[269px] h-[295px]' src='/assets/pizza-1.avif' alt='' />

					<div className='xl:w-[60%] lg:w-[40%]  flex space-x-4'>
						<div>
							<FaQuoteLeft />
						</div>
						<div>
							<h2 className='text-2xl pb-6 font-Playfair '>Best atmosphere and food</h2>
							<p className='text-lg pb-12 border-b-[2px] border-[#e6e6e6] font-Sintony'>
								Many desktop publishing packages and web page editors now use Lorem Ipsum as their
								default model text, and a search for 'lorem ipsum' will uncover many web sites still
								in their infancy. Various versions have evolved over the years, sometimes by
								accident.
							</p>

							<p className='pt-6 uppercase text-lg font-Sintony font-bold'>DR. PRABAKARAN JOHN</p>
							<div className='flex space-x-2 text-[#cfa72d]'>
								<BsQuestionSquare />
								<BsQuestionSquare />
								<BsQuestionSquare />
								<BsQuestionSquare />
							</div>
						</div>
						<div className='my-64 sm:my-40'>
							<FaQuoteRight />
						</div>
					</div>
					<div className='flex md:flex-col justify-center -translate-y-24 sm:translate-y-0 space-x-2 md:space-x-0 md:my-auto md:pl-8'>
						<TbCircleDot />
						<TbCircleDot />
						<TbCircleDot />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Reviews

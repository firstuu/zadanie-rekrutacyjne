import React from 'react'
import { BsQuestionSquare } from 'react-icons/bs'

const Footer = () => {
	return (
		<footer className='bg-[#373844] pt-20 pb-20 text-white'>
			<div className='lg:w-[1240px] mx-auto flex justify-between'>
				<div className='flex flex-col justify-between '>
					<h1 className='text-3xl mb-6 font-Playfair'>Navigation</h1>
					<ul className='uppercase letter tracking-[0.35px] font-Sinton text-sm text-[#ADB2B7] space-y-2'>
						<li>Home</li>
						<li>About us</li>
						<li>Menu</li>
						<li>Reservation</li>
						<li>Recipe</li>
						<li>blog</li>
						<li>Blog</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div>
					<h1 className='text-3xl mb-6 font-Playfair'>News letter</h1>
					<p className='text-[#ADB2B7]'>Enter your email address and subscribe daily newsletter</p>
					<div className='flex items-center pt-4'>
						<input
							className='px-10 py-4 mr-2 rounded-[4px] border-[2px] border-[#52535E] bg-transparent placeholder:text-[#f1f1f1a8] outline-none'
							type='text'
							placeholder='Email Address'
						/>
						<button className='px-10 py-4'>Subscribe</button>
					</div>
					<div className='flex space-x-2 pt-8'>
						<button className='bg-[#3B5998] p-3 rounded-full'>
							<BsQuestionSquare />
						</button>
						<button className='bg-[#55ACEE] p-3 rounded-full'>
							<BsQuestionSquare />
						</button>
						<button className='bg-[#DD4B39] p-3 rounded-full'>
							<BsQuestionSquare />
						</button>
					</div>
				</div>
				<div className='space-y-4'>
					<h1 className='text-3xl mb-6 font-Playfair'>Our app avilable</h1>
					<button className='flex justify-start items-center w-[240px] bg-[#52535E] normal-case'>
						<img className='px-4 ' src='/assets/icon_apple.png' alt='' />
						<div className='flex flex-col items-start text-[#EDF1F3] '>
							<p className='text-[12px]'>Avilable on the </p>
							<p className='text-lg'>App Store</p>
						</div>
					</button>
					<button className='flex justify-start items-center w-[240px] bg-[#52535E] normal-case'>
						<img className='px-4 ' src='/assets/icon_Google Play.png' alt='' />
						<div className='flex flex-col items-start text-[#EDF1F3] '>
							<p className='text-[12px]'>Get it on </p>
							<p className='text-lg'>Google Play</p>
						</div>
					</button>
				</div>
			</div>
			<div className='flex items-center w-[1240px] mx-auto pt-20'>
				<div className='flex-1 h-[1px] bg-[#ADB2B7]' />
				<p className='px-8 text-[#ADB2B7] font-Sintony'>
					2016 © LUXURY RESTAURANT, ALL RIGHTS RESERVED
				</p>
				<div className='flex-1 h-[1px] bg-[#ADB2B7] ' />
			</div>
		</footer>
	)
}

export default Footer

import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
	const [nav, setNav] = useState(false)
	const navHandler = () => {
		setNav(!nav)
	}

	return (
		<nav className='xl:w-[1240px] lg:w-[1024px] flex justify-between items-center m-auto pt-[10px] relative'>
			<div
				className={
					nav ? 'hidden' : 'flex flex-col uppercase text-center font-Playfair px-6 sm:px-10 lg:px-0'
				}>
				<h1 className='text-[34px] text-[#fea100]'>Luxury</h1>
				<h2 className='text-[20px] text-whit tracking-[0.9px] translate-y-[-17px]'>Restaurant</h2>
			</div>
			<div>
				<ul className=' lg:flex justify-center uppercase letter tracking-[0.35px] font-Sintony text-white text-md hidden xl:space-x-12 md:space-x-6'>
					<li>Home</li>
					<li>menu</li>
					<li>reservation</li>
					<li>recipe</li>
					<li>blog</li>
					<li>pages</li>
					<li className='pr-4'>Contact</li>
					<Image
						className='mt-[3px] space-x-4'
						src='/../public/assets/component.png'
						alt='/'
						width='25px'
						height='20px'
					/>
				</ul>
			</div>

			<button className='lg:block hidden'>
				<div className='flex items-center justify-between border rounded-[4px] border-white p-2 tracking-[0.35px]'>
					<img src='/assets/bell.png' alt='' />
					<span className='ml-[10px]'>book your table</span>
				</div>
			</button>
			<div className={nav ? 'hidden' : 'lg:hidden px-4 sm:px-10'} onClick={navHandler}>
				<AiOutlineMenu size={25} />
			</div>

			{/* Hamburger Menu */}
			<div
				className={
					nav
						? 'lg:hidden fixed z-20 bg-white/90 top-0 left-0 h-screen sm:w-[60%] md:w-[40%] w-[80%]'
						: 'hidden'
				}>
				<div className='flex justify-between'>
					<div className='flex flex-col uppercase text-center font-Playfair px-6 sm:px-10 lg:px-0'>
						<h1 className='text-[34px] text-[#fea100]'>Luxury</h1>
						<h2 className='text-[20px] text-whit tracking-[0.9px] translate-y-[-17px]'>
							Restaurant
						</h2>
					</div>
					<AiOutlineClose onClick={navHandler} className='mt-4 mr-4' size={25} />
				</div>
				<ul className='flex flex-col justify-center items-center uppercase letter tracking-[0.35px] font-Sintony text-black text-md space-y-4 pt-8'>
					<li>Home</li>
					<li>menu</li>
					<li>reservation</li>
					<li>recipe</li>
					<li>blog</li>
					<li>pages</li>
					<li>Contact</li>
					<Image
						className='mt-[3px]'
						src='/../public/assets/component.png'
						alt='/'
						width='25px'
						height='20px'
					/>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar

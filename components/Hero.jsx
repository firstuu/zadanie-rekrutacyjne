import React from 'react'
import Navbar from '../components/Navbar'
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

const Hero = () => {
	return (
		<section className='w-full h-screen bg-[#7d8587]'>
			<Navbar />
			<div className='flex justify-between items-center xl:w-[1240px] h-[60%] mx-auto mt-auto  '>
				<MdOutlineArrowBackIos className='text-white' size={100} />
				<div className='text-white text-center'>
					<span className='sm:text-6xl text-2xl'>Teast your fav dish</span>
					<p className='sm:text-4xl text-xl'>from luxury restaurent.</p>
				</div>
				<MdArrowForwardIos className='text-white' size={100} />
			</div>
			<div className='flex flex-col justify-center items-center'>
				<img className='w-[50px] pb-10' src='/assets/icon_phone.png' alt='' />
				<p className='text-lg text-[#fea100]'> CALL US AND BOOK YOUR TABLE</p>
				<p className='text-white text-4xl'>1-008 005 006</p>
			</div>
		</section>
	)
}

export default Hero

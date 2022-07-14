import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Gallery = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	}

	return (
		<div className='w-full pb-20 pt-20 bg-[#EDF1F3]'>
			<h1 className='text-center text-4xl pb-10'>Our Gallery</h1>
			<Carousel arrows={false} showDots={true} responsive={responsive} className=''>
				<div className='translate-x-1'>
					<img src='assets/1.avif' alt='' width='600px' height='340px' />
				</div>
				<div className=''>
					<img src='assets/1.avif' alt='' width='600px' height='240px' />
				</div>
				<div className=''>
					<img src='assets/1.avif' alt='' width='600px' height='340px' />
				</div>
				<div className=''>
					<img src='assets/1.avif' alt='' width='600px' height='340px' />
				</div>
				<div className=''>
					<img src='assets/1.avif' alt='' width='600px' height='340px' />
				</div>
				<div className=''>
					<img src='assets/1.avif' alt='' width='600px' height='340px' />
				</div>
				<div className=''>
					<img src='assets/1.avif' alt='' width='600px' height='340px' />
				</div>
				<div className=''>
					<img src='assets/1.avif' alt='' width='600px' height='240px' />
				</div>
				<div className=''>
					<img src='assets/1.avif' alt='' width='600px' height='240px' />
				</div>
			</Carousel>
		</div>
	)
}
export default Gallery

import React from 'react'

const Info = () => {
	return (
		<main className='bg-[#f1f1f1] pt-6 pb-10 font-Playfair'>
			<div className='lg:w-[1240px] mx-auto py-auto flex justify-between items-center '>
				<h1 className='text-5xl '>Opening Hours</h1>

				<div className='flex text-center'>
					<div className='px-4'>
						<p className='text-2xl'>Monday to Friday </p>
						<p className='text-3xl text-[#FEA100]'>10am - 10pm</p>
					</div>
					<div className='px-4'>
						<p className='text-2xl'>Monday to Friday </p>
						<p className='text-3xl text-[#FEA100]'>10am - 10pm</p>
					</div>
				</div>
				<div>
					<img
						className='translate-y-20'
						src='/assets/1.avif'
						alt=''
						width='310px'
						height='310px'
					/>
				</div>
			</div>
		</main>
	)
}

export default Info

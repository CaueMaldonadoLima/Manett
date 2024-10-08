import Image from 'next/image'
import React from 'react'

export default function page() {
	return (
		<main className='bg-background bg-opacity-90 space-x-16 flex w-full h-screen px-64 py-16'>
			<Image 
				src={'/images/purple-logo.svg'} 
				width={300}
				height={300}	
				alt={''}
			/>
			<div>
				<div className='bg-white flex flex-col shadow-md p-16 rounded-lg'>
					<span>Get Started</span>
					<span className='text-secondary'>Create your account now!</span>
					<label htmlFor="" className='text-text'>email</label>
					<input type="text" className='border-2 rounded-sm border-secondary p-2'/>
				</div>
			</div>
		</main>
	)
}

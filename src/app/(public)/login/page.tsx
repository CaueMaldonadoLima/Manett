import { InputText } from '@/components'
import { ArrowRightIcon } from '@/components/icons'
import Image from 'next/image'
import React from 'react'

export default function page() {
	return (
		<main className='bg-background flex-1 bg-opacity-90 space-x-16 flex-col w-full px-24 h-screen'>
			<div className='px-16 py-4 w-full items-center justify-start'>
				<Image 
					src={'/images/purple-logo.svg'} 
					width={150}
					height={150}	
					alt={''}
				/>
			</div>
			<div className='flex gap-6'>
				<div className='w-full flex	rounded-lg p-16 bg-accent'>
					.
				</div>
				<div className='bg-white w-full flex flex-col shadow-md p-16 rounded-lg gap-4'>
					<span>Get Started</span>
					<span className='text-secondary'>Create your account now!</span>
					<div className='flex w-full flex-row gap-2'>
						<InputText labelText={'First name'} type='text'/>
						<InputText labelText={'Last name'} type='text'/>
					</div>
					<InputText labelText={'E-mail'} type='text'/>
					<InputText labelText={'Password'} type='text'/>
					<button className='w-full bg-primary p-2 rounded-md my-2'>
						<div className='text-white flex w-full items-center justify-center'>
							<span className='mr-2'>
								Join us 
							</span>
							{ArrowRightIcon()}
						</div>
					</button>
					<div>
						<span className='text-secondary'>Already have an account?</span>
						<button className='text-primary'>Sign in</button>
					</div>
				</div>
			</div>
		</main>
	)
}

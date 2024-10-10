import { InputText, Text } from '@/components'
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
					<div className='flex-col w-full flex'>
						<Text type='title'>Get Started</Text>
						<Text variant='secondary'>Create your account now!</Text>
					</div>
					<div className='flex w-full flex-row gap-2'>
						<InputText labelText={'First name'} type='text' placeholder='John'/>
						<InputText labelText={'Last name'} type='text' placeholder='Doe'/>
					</div>
					<InputText labelText={'E-mail'} type='text' placeholder='mail@example.com'/>
					<InputText labelText={'Password'} type='text' placeholder='●●●●●●'/>
					<div>
						<button className='w-full bg-primary p-2 rounded-md my-2'>
							<div className='text-white flex w-full items-center justify-center'>
								<span className='mr-2'>
									Join us 
								</span>
								{ArrowRightIcon()}
							</div>
						</button>
						<div className='w-full gap-2 flex flex-row'>
							<span className='text-secondary'>Already have an account?</span>
							<button className='text-primary'>Sign in</button>  {/* TODO: link to sign in page */}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

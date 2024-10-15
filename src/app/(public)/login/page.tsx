import { Button } from '@/components'
import { ArrowRightIcon } from '@/components/icons'
import { LoginCard, LoginForm, LoginTitle, SigninForm } from '@/components/PageComponents/Login'
import Image from 'next/image'
import React from 'react'

export default function page() {
	const isLogin = true

	function onSubmit() {
		console.log('onSubmit')
	}

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
				{isLogin? (
					<>
						<LoginCard>
							<LoginTitle title={'Welcome back'} subtitle='Continue with Google or enter your details.'/>
							<SigninForm/>
							<div>
								<Button
									variant='solid'
								> 
									Sign Up
								</Button>
								<div className='w-full gap-2 flex flex-row'>
									<span className='text-secondary'>Don't have an account yet?</span>
									<button className='text-primary'>Sign up</button>  
								</div>
							</div>
						</LoginCard>
						<div className='w-full flex	rounded-lg p-16 bg-accent'>
							.
						</div>
					</>
				) : (
					<>
						<div className='w-full flex	rounded-lg p-16 bg-accent'>
							.
						</div>
						<LoginCard>
							<LoginTitle title={'Get Started'} subtitle={'Create an account now!'}/>
							<LoginForm />
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
						</LoginCard>
					</>
				)}
			</div>
		</main>
	)
}

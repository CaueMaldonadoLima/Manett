import { Text } from '@/components'
import Image from 'next/image'
import React from 'react'

export default function page() {
	return (
		<main className='bg-background bg-opacity-90 space-x-16 flex w-full h-screen px-64 py-16'>
			<div className='bg-background w-full h-full flex rounded-lg shadow-lg items-center justify-center'>
				<div className='w-1/2 items-center flex flex-col h-full justify-center text-center'>
					<Text className='text-3xl font-bold'>Login</Text>
					<input type="text" />
					<input type="text" />
					<input type="text" />
				</div>
			</div>
			<div className='bg-background w-full h-full flex rounded-lg shadow-lg items-center justify-center'>
				<div className='w-1/2 items-center flex flex-col h-full justify-center text-center'>
					<Text className='text-3xl font-bold'>Login</Text>
					<input type="text" />
					<input type="text" />
					<input type="text" />
				</div>
			</div>
		</main>
	)
}

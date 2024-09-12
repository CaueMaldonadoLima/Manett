import { Text } from '@/components'
import Image from 'next/image'
import React from 'react'

export default function page() {
	return (
		<div>
			<Image
				src="/images/logo-manett.png"
				alt="Logo Manett"
				height={100}
				width={100}>
			</Image>
			<Text>Teste</Text>
		</div>
	)
}

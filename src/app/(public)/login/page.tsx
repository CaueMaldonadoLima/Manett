import { Button } from '@/components'
import { ArrowRightIcon } from '@/components/icons'
import { LogAndSign } from '@/components/PageComponents/Login'
import Image from 'next/image'
import React from 'react'

export default function page() {
	const isLogin = true

	function onSubmit() {
		console.log('onSubmit')
	}

	return (
		<LogAndSign/>
	)
}

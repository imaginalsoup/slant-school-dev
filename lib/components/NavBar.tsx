import { HStack } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const NavBar = () => {
	return (
		<HStack height='48px' justifyContent='space-between' padding='24px' background='transparent' className='navbar'>
			<Logo />
			<HStack gap={12} >
				<Link href='/lectures'>
					lectures
				</Link>
				<Link href='/about'>
					about
				</Link>
			</HStack>
		</HStack>)
}

export default NavBar
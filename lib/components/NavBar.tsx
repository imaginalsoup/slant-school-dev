import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const NavBar = () => {
	return (
		<HStack height='60px' justifyContent='space-between' background='transparent' className='navbar' alignItems='center' padding='0' paddingLeft='36px' paddingRight='36px'
		>
			<VStack marginBottom='0px'>
				<Logo />
			</VStack>
			<HStack gap='32px' justifyContent='center' alignItems='center' alignContent='center' paddingTop='0' height='100%' padding='0' margin='0'>
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
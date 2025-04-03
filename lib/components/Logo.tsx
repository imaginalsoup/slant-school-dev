import { Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

const Logo = () => {
	return (
		<Link href='/' id='logo' >
			<Text fontFamily='EB Garamond' fontSize='24px' fontWeight='bolder' fontStyle='italic' padding='0' margin='0'>
				[ ] </Text>
		</Link>
	);
}

export default Logo
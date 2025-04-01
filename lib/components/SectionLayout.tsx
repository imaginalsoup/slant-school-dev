import { Container } from '@chakra-ui/react'
import React, { type ReactNode } from 'react'

type Props = {
	children: ReactNode;
}

const SectionLayout = ({ children }: Props) => {
	return (
		<Container paddingTop='32px' paddingBottom='32px'>{children}</Container>
	)
}

export default SectionLayout
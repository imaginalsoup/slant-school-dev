import React from 'react'
import type { lecturesProps } from '../types/lecture-props'
import { Box, Heading } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion-x'

type Props = {
	lectures: lecturesProps
}

const LecturesSection = ({ lectures }: Props) => {
	return (
		<Box>
			<Heading paddingTop='32px'>slant lecture series</Heading>
			{lectures.map((item, index) =>
				<Box key={index.toString()} paddingBottom='56px'>
					<Heading color='colors.orange'>
						<i>
							{(index + 1).toString()} {item.id} aslant
						</i>
					</Heading>
					<Box paddingLeft='24px'>
						<NotionRenderer recordMap={item.content} />
					</Box>
				</Box>
			)}
		</Box >)
}

export default LecturesSection
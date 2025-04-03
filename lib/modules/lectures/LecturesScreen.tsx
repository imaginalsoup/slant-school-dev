import React from 'react';
import { Container, Heading, Link, TabsContent, TabsList, TabsRoot, TabsTrigger, VStack } from '@chakra-ui/react'
import type { lecturesProps } from '../../types/lecture-props';
import NavBar from '../../components/NavBar';
import { NotionRenderer } from 'react-notion-x';

type Props = {
	lectures: lecturesProps;
}

const LecturesScreen = ({ lectures }: Props) => {
	return <Container className='lecture-page'>
		<NavBar />

		<TabsRoot defaultValue={lectures[0].id}
			variant='subtle'
		>
			<VStack background="var(--black)" paddingTop='56px' >
				<Heading as='h1' color="var(--white)" width='80%' margin='auto' textAlign='center'>slant school lecture series</Heading>
				<TabsList paddingBottom="56px" paddingTop='36px' width='80%' display='flex' justifyContent='center' alignItems='center'>
					{lectures.map((item) =>
						<>
							<TabsTrigger key={item.id} value={item.id} asChild color="var(--orange2)" className='lecture-tab-nav'>
								<Link href={`#${item.id}`} textAlign='center' fontSize='large' textDecoration='none' >
									<>
										{item.id} aslant
									</>
								</Link>
							</TabsTrigger>
						</>
					)}
				</TabsList>
			</VStack>
			<VStack
				width="80%"
				margin="auto"
				marginTop='48px'
			>
				{lectures?.map((item) => (
					<TabsContent value={item.id} key={item.id} className='lecture-details'>
						<NotionRenderer recordMap={
							item.content}
						/>
					</TabsContent>
				))}
			</VStack>
		</TabsRoot>
	</Container >
}



export default LecturesScreen
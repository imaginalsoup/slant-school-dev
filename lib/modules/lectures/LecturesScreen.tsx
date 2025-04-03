import React from "react"
React.useLayoutEffect = React.useEffect

import { Container, Link, TabsContent, TabsList, TabsRoot, TabsTrigger } from '@chakra-ui/react'
import type { lecturesProps } from '../../types/lecture-props';
import { NotionPage } from "../../components/NotionPage";

type Props = {
	lectures: lecturesProps;
}

const LecturesScreen = ({ lectures = [] }: Props) => {
	return (
		<Container width='80%' margin='auto'>
			<TabsRoot defaultValue="members" marginTop='48px' width="80%">
				<TabsList>
					{lectures.map((item) =>
						<TabsTrigger key={item.id} value={item.id} asChild color="var(--orange)" marginRight='24px'>
							<Link unstyled href={`#${item.id}`}>
								{item.id} aslant
							</Link>
						</TabsTrigger>
					)}

				</TabsList>
				{lectures?.map((item) => (
					<TabsContent value={item.id} key={item.id}>
						<NotionPage recordMap={
							item.content}
						/>
					</TabsContent>
				))}
			</TabsRoot>
		</Container>)
}



export default LecturesScreen
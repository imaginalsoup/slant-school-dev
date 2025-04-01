// core styles shared by all of react-notion-x (required)
import React from 'react';
// import 'react-notion-x/src/styles.css';
import '../styles/globals.css';
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	theme: {
		tokens: {
			colors: {},
		},
	},
})

const system = createSystem(config);


/* eslint-disable react/prop-types */
const MyApp = ({ Component, pageProps }) => {
	return <ChakraProvider value={system}>
		<Component {...pageProps} />
	</ChakraProvider>
};

export default MyApp;

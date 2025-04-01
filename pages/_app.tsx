// core styles shared by all of react-notion-x (required)
import React from 'react';
// import 'react-notion-x/src/styles.css';
import '../styles/globals.css';

/* eslint-disable react/prop-types */
const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default MyApp;

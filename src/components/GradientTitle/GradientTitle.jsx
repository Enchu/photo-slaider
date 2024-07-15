import React from 'react';
import './GradientTitle.css'

const GradientTitle = ({children}) => {
	return (
		<>
			<h1 className={`gradient-title`}>{children}</h1>
		</>
	);
};

export default GradientTitle;

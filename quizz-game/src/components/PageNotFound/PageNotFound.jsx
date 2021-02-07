import React from 'react';
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<div>
			<h1>This page does not exist</h1>
			<Link to='/'>Retour en lieu sur</Link>
		</div>
	);
};

export default PageNotFound
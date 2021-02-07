import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useCurrentUser } from '../customHooks/hooks'

const PrivateRoute = ({ component: Component, ...rest}) => {

	const currentUser = useCurrentUser()

	return (
		<Route
			{...rest}
			render={props => (
				!currentUser.auth ? <Redirect to='/login' /> 
					: !currentUser.auth.emailVerified ? <Redirect to='/confirm-email' />
						:<Component {...props} />
			)}
		>	
		</Route>
	)
}

export default PrivateRoute;
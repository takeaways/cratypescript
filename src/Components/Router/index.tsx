import * as React from 'react';
import { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	RouteProps,
	RouteComponentProps
} from 'react-router-dom';


import Nav from '../Nav';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../Reducer';

const Home = React.lazy(() => import('../../Pages/Home'));
const Detail = React.lazy(() => import('../../Pages/Detail'));
const Translate = React.lazy(() => import('../../Pages/Translate'));
const Todo = React.lazy(() => import('../../Pages/Todo'));
const LogIn = React.lazy(() => import('../../Pages/LogIn'));
const SignUp = React.lazy(() => import('../../Pages/SignUp'));

interface CustomRouteProps extends RouteProps {
	component: React.ComponentType<RouteComponentProps<any>>;
}
const IsLoggedIn = () => { }
const IsNotLoggedIn = ({ component: Component, ...params }: CustomRouteProps) => {
	const user = useSelector((state: RootState) => state.user.user)
	console.log("---> user , ", user?.id)
	return (
		<Route
			{...params}
			render={props => user?.id ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
}


export default () => {
	return (
		<React.Suspense fallback={<Loader />}>
			<Router>
				<Nav />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route path={'/movie/:id'} component={Detail} />
					<Route path={'/translate'} component={Translate} />
					<Route path={'/todo'} component={Todo} />
					<IsNotLoggedIn path={'/login'} component={LogIn} />
					<IsNotLoggedIn path={'/signup'} component={SignUp} />
					<Redirect from={'*'} to={'/'} />
				</Switch>
			</Router>
		</React.Suspense>
	);
};

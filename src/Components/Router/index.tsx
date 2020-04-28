import * as React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';


import Nav from '../Nav';
import Loader from '../Loader';

const Home = React.lazy(() => import('../../Pages/Home'));
const Detail = React.lazy(() => import('../../Pages/Detail'));
const Translate = React.lazy(() => import('../../Pages/Translate'));
const Todo = React.lazy(() => import('../../Pages/Todo'));
const LogIn = React.lazy(() => import('../../Pages/LogIn'));
const SignUp = React.lazy(() => import('../../Pages/SignUp'));


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
					<Route path={'/login'} component={LogIn} />
					<Route path={'/signup'} component={SignUp} />
					<Redirect from={'*'} to={'/'} />
				</Switch>
			</Router>
		</React.Suspense>
	);
};

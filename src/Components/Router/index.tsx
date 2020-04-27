import * as React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import Home from '../../Pages/Home';
import Detail from '../../Pages/Detail';
import Translate from '../../Pages/Translate';
import Todo from '../../Pages/Todo';

import LogIn from '../../Pages/LogIn';
import SignUp from '../../Pages/SignUp';
import Nav from '../Nav';

export default () => {
	return (
		<>
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
		</>
	);
};

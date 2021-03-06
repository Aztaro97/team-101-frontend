import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContributorMenuBar from './contributorMenuBar';
import ContributorLogin from "./contributorLogin";
import ContributorSignUp from './contributorSignUp';
import ResetPassword from "./forgotPassword";
import Footer from './footer';

export default function Contributor(props){

	return(
		<Router>
			<ContributorMenuBar/>
			<Switch>
				<Route path ="/login">
					<ContributorLogin/>
				</Route>
				<Route path ="/signup-to-contribute">
					<ContributorSignUp/>
				</Route>
				<Route path ="/reset-password">
				<ResetPassword/>
				</Route>

			</Switch>
			<Footer/>
		</Router>
		);
}
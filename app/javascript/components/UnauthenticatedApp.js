 import React from "react"
 import PropTypes from "prop-types"
 import {
   BrowserRouter as Router,
   Route, Switch,
 } from 'react-router-dom'
 import ApartmentsPage from './pages/ApartmentsPage'
 class UnauthenticatedApp extends React.Component {
   render () {
     const { apartments } = this.props
     return (
       <React.Fragment>
       <a href="/users/sign_in">Login</a>
        <Router>
          <Switch>
             <Route to="/apartments" render={() => (
                 <ApartmentsPage {...this.props} />
               )} />
          </Switch>
         </Router>
         </React.Fragment>
     );
   }
 }

 export default UnauthenticatedApp

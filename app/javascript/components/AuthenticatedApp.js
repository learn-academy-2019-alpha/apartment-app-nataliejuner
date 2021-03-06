 import React from "react"
 import PropTypes from "prop-types"
 import {
   BrowserRouter as Router,
   Route,
   Switch
 } from 'react-router-dom'

 import ApartmentsPage from './pages/ApartmentsPage'
 class AuthenticatedApp extends React.Component {
   render () {
  const { current_user } = this.props
     return (
      <React.Fragment>
      <h2> Welcome, {current_user.name}! </h2>
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

 export default AuthenticatedApp

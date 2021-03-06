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
       <h1> All Apartments</h1>
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

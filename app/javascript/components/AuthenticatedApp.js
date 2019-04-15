: import React from "react"
: import PropTypes from "prop-types"
: import {
:   BrowserRouter as Router,
:   Route,
: } from 'react-router-dom'
:
: import Apartments from './pages/Apartments'
: class AuthenticatedApp extends React.Component {
:   render () {
:     return (
:       <Router>
:         <div>
:             <Route path="/Apartments" component={Apartments} />
:         </div>
:       </Router>
:     );
:   }
: }
:
: export default AuthenticatedApp

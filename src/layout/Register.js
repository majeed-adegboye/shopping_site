import React, { Component } from 'react'
import '../App.css';
import {BrowserRouter as Router, Route,  NavLink} from 'react-router-dom';
import signUpForm from './signUpForm';
import signInForm from './signInForm';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


class Register extends Component {
    render() {
        const { auth, authError } = this.props;
                if (auth.uid) 
                return <Redirect to="/" /> 
        return (
            <Router basename="/react-auth-ui/">
            <div className="App">
                <div className="App__Aside"></div>
                    <div className="App__Form">
                        <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                        <NavLink exact to="/sign up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                            </div>

              
                    <Route exact path="/sign up" component={signUpForm}/>

                      <Route path="/sign-in" component={signInForm}/>
                         
                    </div>
                    
                
            </div>
                
            </Router>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}


export default connect(mapStateToProps)(Register);

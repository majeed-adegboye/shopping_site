import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {signUp} from '../store/reducer/authAction'
import {connect} from 'react-redux'
import { reactReduxFirebase } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'

class signUpForm extends Component {
    state ={
        email:'',
        password:'',
        firstName:'',
        lastName:''
           }
           handleChange = (e) => {
              this.setState({
                  [e.target.id]:e.target.value
              })
           }
        
           handleSubmit = (e) => {
          e.preventDefault();
          this.props.signUp(this.state)
        }
           
        
            render() {
                const { auth, authError } = this.props;
                if (auth.uid) 
                return <Redirect to="/" /> 
                return (
                    
                    <div className="container">
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5 className="grey-text text-darken-3">Sign Up</h5>
                            <div className="input-field">
                               <label htmlFor="email">Email</label> 
                               <input type="email" id="email" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                               <label htmlFor="password">Password</label> 
                               <input type="password" id="password" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                               <label htmlFor="firstName">First Name</label> 
                               <input type="text" id="firstName" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                               <label htmlFor="lastName">Last Name</label> 
                               <input type="text" id="lastName" onChange={this.handleChange}/>
                            </div>
                            <div><p></p></div>
                            <div className="FormField">
                            <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" 
                            type="checkbox" name="hasAgreed" 
                            value={this.state.hasAgreed} onChange={this.handleChange} /> 
                            I agree all statements in<a className="FormField__TermsLink">terms of service</a>
                            </label>
                                </div>
                            <div className="input-feild">
                            <button className="FormField__Button mr-20">Sign Up</button> 
                            <div className="center red-text">
                                { authError ? <p>{authError}</p> : null }
                          <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                          </div>
                            </div>
                        </form>
                    </div>
             );
            }
                            
                        
    }

    const mapStateToProps = (state) => {
        return {
            auth: state.firebase.auth,
            authError: state.auth.authError
        }
    }


    const mapDispatchToProps =(dispatch)=>{
        return{
            signUp: (newUser) => dispatch(signUp(newUser))
        }
    }

export default connect (mapStateToProps, mapDispatchToProps)(signUpForm);








// constructor() {
//     super();

//     this.state = {
//         email: '',
//         password: '',
//         name: '',
//         hasAgreed: false
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleChange(e) {
//     let target = e.target;
//     let value = target.type === 'checkbox' ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value
//     });
// }

// handleSubmit(e) {
//     e.preventDefault();

//     console.log('The form was submitted with the following data:');
//     console.log(this.state);
// }
//   <div className="FormCenter">
//                       <form className="FormFields" onSubmit={this.handleSubmit}>
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="name" >Full Name</label>
//                             <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>

//                         </div>
//                         <div className="FormField">
//                             <label htmlFor="password" className="FormField__Label">Password</label>
//                             <input type="password" id="pass" className="FormField__Input" placeholder="Enter your password" name="pass" value={this.state.name} onChange={this.handleChange} />

//                         </div>

//                         <div className="FormField">
//                             <label htmlFor="password" className="FormField__Label">Password</label>
//                             <input type="password" id="Copass" className="FormField__Input" placeholder="Enter your password again" name="Copass" value={this.state.name} onChange={this.handleChange}/>

//                         </div>
//                         <div className="FormField">
//                             <label htmlFor="email" className="FormFeild__Label">Email</label>
//                             <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>

//                         </div>

                   

//                         <div className="FormField">
//                             <button className="FormField__Button mr-20">Sign Up</button> 
//                             <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
//                             </div>

//                       </form>
                      
                      
                      
                      
//                       </div>  
                    
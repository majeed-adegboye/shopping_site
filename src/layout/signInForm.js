import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {signIn} from '../store/reducer/authAction'


class signInForm extends Component {
   state ={
email:'',
password:''
   }
   handleChange = (e) => {
      this.setState({
          [e.target.id]:e.target.value
      })
   }

   handleSubmit = (e) => {
  e.preventDefault();
   this.props.signIn(this.state);
}
   

    render() {
        const {authError} = this.props;
        return (
            
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                       <label htmlFor="email">Email</label> 
                       <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="password">Password</label> 
                       <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div><p></p></div>
                    
                    <div className="input-feild">
                    <button className="FormField__Button mr-20" >Sign In</button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null }
                    </div>
                    <Link to="/sign up" className="FormField__Link">Register an account</Link>
                    </div>
                </form>
            </div>
     );
    }
                    
                
    }
    const mapStateToProps = (state) =>{
        return{
            authError: state.auth.authError
        }
    }

    const mapDispatchToProps = (dispatch) =>{
        return{
            signIn: (credentials) => dispatch(signIn(credentials))
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(signInForm);                  










 // constructor() {
    //     super();

    //     this.state = {
    //         email: '',
    //         password: ''
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

            // {/* <div className="FormCenter">
            //           <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit} >

            //             <div className="FormField">
            //                 <label className="FormFeild__Label" htmlFor="email" >Email Address</label>
            //                 <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}/>

            //             </div>
            //             <div className="FormField">
            //                 <label htmlFor="password" className="FormField__Label">Password</label>
            //                 <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>

            //             </div>
              

            
            //             <div className="FormField">
            //                 <button className="FormField__Button mr-20" >Sign In</button>

            //                 <Link to="/sign up" className="FormField__Link">Register an account</Link>
            //             </div>

            //           </form>
                    
                      
            //           </div>   */}
                      
 
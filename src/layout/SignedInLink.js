import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


import {ButtonContainer, ButtonContainer3} from '../components/button';

import {connect} from 'react-redux'
import {signOut} from '../store/reducer/authAction'




const SignedInLink = (props)=> {

        return (
          
              <div className="mlauto">
    
              <Link to="/"> <a className="ml-auto" onClick={props.signOut}>
              <ButtonContainer>
                  <span className="mr-2">
                  LogOut
                  </span>
              </ButtonContainer>
              </a>
              </Link>
            
            
              <ButtonContainer3>
                <NavLink  className='btn btn-floating red lighten-1 text-center'>
                {props.profile.initials}</NavLink>
                </ButtonContainer3>
                </div>
              
        );
    }


const mapDispatchToProps = (dispatch)=> {
  return{
    signOut: ()=>dispatch(signOut())
  }
}


export default connect(null,mapDispatchToProps)(SignedInLink)


  


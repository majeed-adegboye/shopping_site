import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../components/button';



const SignedOutLink = ()=> {
  
          return (
              
                
              <div className= "mrt ml-auto">
            
                <Link to="/register" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    Login/SignUp
                    </span>
                </ButtonContainer>
                </Link>
                </div>
               
    
       

        
        );
    }

    export default SignedOutLink
   






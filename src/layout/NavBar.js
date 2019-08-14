import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink';
import {connect} from 'react-redux'
import styled from 'styled-components';
import logo from '../logo.svg'
import {ButtonContainer} from '../components/button';
import PropTypes from 'prop-types'
import { UncontrolledButtonDropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';





const NavBar =(props) => {
  const {auth, profile} = props;

  const links = auth.uid ? <SignedInLink profile={profile}/> : <SignedOutLink/>;
  
    return (
       <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
       <ul className="navbar-nav align-items-center">
       <Link to='/'>
                    <img src={logo} alt ="store" className="navbar-brand" />
        </Link>
        </ul>
  
        <ul className="navbar-nav align-items-right">
                <UncontrolledButtonDropdown>
                  <DropdownToggle caret caret-color="red">
                        Categories
                  </DropdownToggle>
                 
                  <DropdownMenu >
                    <DropdownItem>
                    <Link to="/fruites-vegetables" className ="content">
                       Fruits & Vegetables
                    </Link> 
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/dairies" className ="content">
                        Dairy
                    </Link>
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/toiletries" className ="content">
                        Toiletries
                    </Link>
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/drinks" className ="content">
                          Drinks
                    </Link></DropdownItem>
                    
                    <DropdownItem divider />
                    <DropdownItem><Link to="/cart" className="ml-auto">
                          <ButtonContainer>
                              <span className="mr-2">
                              <i className="fas fa-cart-plus"/>
                             My Cart

                              </span>
                          </ButtonContainer>
                          </Link>
                          </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledButtonDropdown>
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                    Home
                    </Link>   
                </li> 
                <Link to="/contact" className="nav-link">
                    Contact
                    </Link>
        
                </ul>

           
             
               
              <div className= "mrt ml-auto">
               <Link to="/cart" className="ml-auto">
               <ButtonContainer>
                   <span className="mr-2">
                   <i className="fas fa-cart-plus"/>
                     Cart
 
                   </span>
               </ButtonContainer>
               </Link>
            
               <div className="mrt ml-auto">
               {links}
               </div>

                </div>
             
            
      
      </NavWrapper>
    )
  }


const mapStateToProps =(state) =>{
    console.log(state);
  return{
auth: state.firebase.auth,
profile: state.firebase.profile
  }
}

export default connect (mapStateToProps)(NavBar)

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    <font-size:1 className="0"></font-size:1>rem;
    text-transform: capitalize ;
}
`;
ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func,
  color: PropTypes.string,
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};

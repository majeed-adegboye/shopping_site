import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import {ProductWrapper} from './ProductWrapper';

import {ProductConsumer} from '../context';
import PropTypes from 'prop-types'

export default class Drinks extends Component {
    render() {
        const{id, title, img, price, inCart} = this.props.drink;
        return (
         <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
              <ProductConsumer>
              {value =>(
          <div 
            className="img-container p-5" 
            onClick={()=>
                value.handleDetailDr(id)          
            
            }>
                <Link to="/detailD">
                <img src={img} alt="drink" className="card-img-top"/>
                </Link>
                <button className="cart-btn" 
                        disabled={inCart ? true:false} 
                        onClick={()=>{
                        value.addDrinksToCart(id);
                        value.openModalDr(id);
                        }}>


                        {inCart?(<p className="text-capitalize mb-0" disabled>{" "}
                            inCart</p>):(<i className="fas fa-cart-plus" />)}
                            
                </button>  
            </div>
            )}
            </ProductConsumer>
            {/* car footer */}
            <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
            {title}
                </p>
                <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">€</span>
                    {price}
                </h5>

            </div>
            </div>
           
        </ProductWrapper>
     
           
        );
    }
}
ProductConsumer.propTypes = {
    drink:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
    }


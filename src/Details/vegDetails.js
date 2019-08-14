import React, { Component } from 'react';
import {ProductConsumer} from '../context';

import {Link} from 'react-router-dom';
import {ButtonContainer, ButtonContainer2} from '../components/button';


class FruitsVegDetails extends Component {
    
    render() {
return (
    <ProductConsumer>
        {value=>{
            const{id, company, img, info, price, title, inCart}=
            value.detailVegProduct;
            return (
                <div className="container py-5">
                    {/* title */}
                    <div className="row">

                        <div className="col-10 
                        mx-auto text-center text-slanted 
                        text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    {/* end title */}
                    {/* product Info */}
                        <div className="row">
                            <div className="col-10 mx-auto 
                            col-md-6 my-3 ">
                                <img src={img} className="img-fluid" alt="fruits"/>
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto 
                            col-md-6 my-3 text-capitalize">
                                <h4 className="text-blue 
                                text-uppercase text-muted mt-3 mb-2">
                                    <span className="text-uppercase">made by : {company}</span>
                                </h4>

                                <h4 className="text-blue">
                                    <strong>
                                        Price: <span>€</span> {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize
                                 font-weight-bold mt-3 mb-0">
                                 Product Description:
                                 </p>
                                 <p className="text-muted lead"> {info} </p>
                                 
                                 {/* for buttons */}
                                 <Link to="/fruites-vegetables">
                                 <ButtonContainer>
                                     Back to Products
                                 </ButtonContainer>
                                 </Link>
                                 <ButtonContainer2 
                                 cart
                                 disabled={inCart?true:false}
                                 onClick={()=>{
                                     value.addFruitsToCart(id)
                                     value.openModalVeg(id);
                                 }}
                                 >
                                     
                                     
                                     {inCart ? "inCart" : "add to cart"}
                                  
                                 </ButtonContainer2>
                                 
                                <div>

                            </div>
                        </div>

                    </div>
                </div>
            );
        }}
    </ProductConsumer>
)
}
}
export {FruitsVegDetails};
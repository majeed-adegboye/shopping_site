import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom';
import {ButtonContainer, ButtonContainer2} from '../components/button';


export default class ModalDrinks extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const{modalOpen,closeModal} = value;
                    const{img,title,price} = value.modalProductDr;

                    if (!modalOpen){
                        return null;
                    }
                    else{
                      return(  <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="DrinkModal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                    <h5>item added to cart</h5>
                                    <img src={img} className="img-fluid" alt="drink"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted"> price : € {price}</h5>
                                    
                                    <ButtonContainer onClick={()=>closeModal()}>
                                    <Link to="/drinks">
                                        Continue Shopping
                                        </Link>
                                    </ButtonContainer>
                                    
                                    <Link to="/cart">
                                    <ButtonContainer2  cart onClick={()=>closeModal()}>
                                        Go to Cart 
                                    </ButtonContainer2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </ModalContainer>
                      )
                    }
                    
                }}

            </ProductConsumer>
        )
    }
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#DrinkModal{
    background: var(--mainWhite);
}

`;

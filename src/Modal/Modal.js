import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom';
import {ButtonContainer, ButtonContainer2} from '../components/button';
import DairyProducts from '../components/DairyProducts';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const{modalOpen,closeModal} = value;
                    const{img,title,price} = value.modalProduct;

                    if (!modalOpen){
                        return null;
                    }
                    else{
                      return(  <ModalContainer >
                        <div className="container">
                            <div className="row">
                                <div id="dairyModal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                    <h5>item added to cart</h5>
                                    <img src={img} className="img-fluid" alt="ddairy"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted"> price : € {price}</h5>
                                    <Link to="/dairies">
                                    <ButtonContainer onClick={()=>closeModal()}> 
                                        Continue Shopping
                                    </ButtonContainer>
                                    </Link>
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
#dairyModal{
    background: var(--mainWhite);
}

`;

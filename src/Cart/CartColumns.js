import React from 'react'

export default function CartColumns() {
    return (
        <div className ="container-fluid text-center">
            <div className="row">

            <div className="col-10 mx-auto col-lg-2">
               <p className="text-uppercase"> products</p> 
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <p className="text-uppercase"> Name of Product</p> 
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <p className="text-uppercase"> Price</p> 
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <p className="text-uppercase"> Quantity</p> 
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <p className="text-uppercase"> remove</p> 
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <p className="text-uppercase"> total</p> 
            </div>

        </div>
        </div>
    )
}

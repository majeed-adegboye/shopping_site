import React, { Component } from 'react';
import DairyProducts from "./DairyProducts";
import Title from './Title';
import {ProductConsumer} from '../context';



export default class DairyList extends Component {  
    
    render() {
        return (
                <React.Fragment>
                <div className="py-5">
                <div className="container">
                <Title name="Dairies"/>
                <div className="row">

                    <ProductConsumer>
                           {value =>{
                               return value.products.map(ddairy =>{
                                   return <DairyProducts  key={ddairy.id} 
                                   ddairy={ddairy}/>; //Used in props in DairyProduct
                               })
                           }} 
            
                    </ProductConsumer>

                </div>
                </div>
                </div>

                </React.Fragment>


           
            
        )
    }
};

// {(value)=>{
//     return value.dairies.map(dairy =>{
//         return <DairyProducts key="{dairy.id}" dairy=
//         {dairy}/>;
//     })
//   }}
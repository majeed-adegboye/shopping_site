import React, { Component } from 'react';
import Toiletries from "./Toiletries";
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ToiletriesList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                <Title name="Toiletries"/>
                <div className="row">
                <ProductConsumer>
                           {value =>{
                               return value.toilets.map(toilet =>{
                                   return <Toiletries  key={toilet.id} 
                                   toilet={toilet}/>; //Used in props in DairyProduct
                               })
                           }} 
            
                    </ProductConsumer>

                </div>
                </div>
                </div>

            </React.Fragment>
        )
    }
}

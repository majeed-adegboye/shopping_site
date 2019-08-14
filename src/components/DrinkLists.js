import React, { Component } from 'react'
import Drinks from './Drinks';
import Title from './Title';
import {ProductConsumer} from '../context';


export default class DrinkLists extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Drinks"/>
                        <   div className="row">
                        <ProductConsumer>
                           {value =>{
                               return value.drinks.map(drink =>{
                                   return <Drinks  key={drink.id} 
                                   drink={drink}/>; //Used in props in DairyProduct
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


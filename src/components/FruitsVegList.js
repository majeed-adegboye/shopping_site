import React, { Component } from 'react';
import FruitsVegetables from "./FruitsVegetables";
import Title from './Title';
import {ProductConsumer} from '../context';

export default class FruitsVegList extends Component {

    render() {
        
        return (
                <React.Fragment>
            
                <div className="container py-5" >
                <Title name="Fruits & Vegetables"/>
            
                <div className="row">
                <ProductConsumer>
                        {(value)=>{
                          return value.fruits.map(fruit=>{
                              return <FruitsVegetables key="{fruit.id}" 
                              fruit={fruit}/>;
                          })
                        }}
            
                    </ProductConsumer>

                </div>
                </div>
              

                </React.Fragment>


           
            
        )
    }
};

                


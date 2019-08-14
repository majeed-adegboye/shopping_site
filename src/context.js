import React, { Component } from 'react'
import {dairyProducts, detailDairyProduct} from './Data/dairyData';
import {DrinkProducts, detailDrinksProduct} from './Data/drinksData';
import {VegProducts, detailVegProduct} from './Data/vegData';
import {ToiletProducts, detailToilProduct} from './Data/toiletriesData';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products:[],
        detailDairyProduct:detailDairyProduct,
        fruits: [],
        detailVegProduct: detailVegProduct,
        drinks: [],
        detailDrinksProduct: detailDrinksProduct,
        toilets: [],
        detailToilProduct:detailToilProduct,

        cart:[],
        modalOpen: false,
        modalProduct: detailDairyProduct,
        modalProductFr: detailVegProduct,
        modalProductDr: detailDrinksProduct,
        modalProductTo: detailToilProduct,

        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
componentDidMount(){
    this.setProducts();
    this.setFruits();
    this.setDrinks();
    this.setToiletries();
}

setProducts =()=>{
    let products =[];
    dairyProducts.forEach(item =>{
        const singleItem ={...item};
        products = [...products, singleItem];
    })
   
    this.setState(()=>{
        return{products: products,
              
        };
    })
}

setFruits =()=>{
    let tempFruits =[];
    VegProducts.forEach(vItem =>{
        const singleVItem ={...vItem};
        tempFruits = [...tempFruits, singleVItem];
    })
    this.setState(()=>{
        return{
                fruits: tempFruits
        };
    })
}

setDrinks =()=>{
    let tempDrinks =[];
    DrinkProducts.forEach(Item =>{
        const singleItem ={...Item};
        tempDrinks = [...tempDrinks, singleItem];
    })
    this.setState(()=>{
        return{
            drinks: tempDrinks
        };
    })
}

setToiletries =()=>{
    let tempToiletries =[];
    ToiletProducts.forEach(Item =>{
        const singleItem ={...Item};
        tempToiletries = [...tempToiletries, singleItem];
    })
    this.setState(()=>{
        return{
                toilets: tempToiletries
        };
    })
}


getItem=(id) => {
    const product = this.state.products.find(item => item.id ===id);
    return product;
};

// getFrItem=(id) => {
//     const frproduct = this.state.fruits.find(item => item.id ===id);
//     return  frproduct;
// }

// getDrItem=(id) => {
//     const drproduct = this.state.drinks.find(item => item.id ===id);
//     return drproduct;
// }

// getToItem=(id) => {
//     const toproduct = this.state.toilets.find(item => item.id ===id);
//     return toproduct;
// }




handleDetail =id=>{
    const product = this.getItem(id);

    this.setState(()=>{
        return{
            detailDairyProduct: product,
            
        }
    })

}
// handleDetailFr =id=>{
//     const frproduct =this.getFrItem(id);
//     this.setState(()=>{
//         return{
//             detailVegProduct: frproduct,
//         }
//     }) 
// }
// handleDetailDr =id=>{
//     const drproduct = this.getDrItem(id);
//     this.setState(()=>{
//         return{
//             detailDrinksProduct: drproduct,
//         }
//     })
// }
// handleDetailTo =id=>{
//     const toproduct = this.getToItem(id);
//     this.setState(()=>{
//         return{
//             detailToilProduct:toproduct
//         }
//     })
// }
addToCart =id=>{
    let tempTProducts ={...this.state.products}
  

    const index = tempTProducts.toString().indexOf(this.getItem(id));
    const tproduct =tempTProducts[index];
    tproduct.inCart = true;
    tproduct.count = 1;
    const price = tproduct.price;
    tproduct.total = price;


    this.setState (()=>{
        return{products: tempTProducts, 
            cart:[...this.state.cart, tproduct]
        };
    }, ()=>{
        this.addTotals();
    });
}

// addFruitsToCart =id=>{
//     let tempFProducts ={...this.state.fruits}

//     const index = tempFProducts.toString().indexOf(this.getFrItem(id));
//     const fproduct =tempFProducts[index];
//     fproduct.inCart = true;
//     fproduct.count = 1;
//     const price = fproduct.price;
//     fproduct.total = price;


//     this.setState (()=>{
//         return{
//             fruits: tempFProducts, 
//             cart:[...this.state.cart, fproduct]
//         };
//     }, ()=>{
//         this.addTotals();
//     });
// }
// addDrinksToCart =id=>{
//     let tempDrinks ={...this.state.drinks}

//     const index = tempDrinks.toString().indexOf(this.getDrItem(id));
//     const dproduct =tempDrinks[index];
//     dproduct.inCart = true;
//     dproduct.count = 1;
//     const price = dproduct.price;
//     dproduct.total = price;


//     this.setState (()=>{
//         return{
//             drinks: tempDrinks, 
//             cart:[...this.state.cart, dproduct]
//         };
//     }, ()=>{
//         this.addTotals();
//     });
// }
// addToiletriesToCart =id=>{
//     let tempDrinks ={...this.state.toilets}

//     const index = tempDrinks.toString().indexOf(this.getDrItem(id));
//     const dproduct =tempDrinks[index];
//     dproduct.inCart = true;
//     dproduct.count = 1;
//     const price = dproduct.price;
//     dproduct.total = price;


//     this.setState (()=>{
//         return{
//             drinks: tempDrinks, 
//             cart:[...this.state.cart, dproduct]
//         };
//     }, ()=>{
//         this.addTotals();
//     });
// }


openModal =id =>{
    const product = this.getItem(id);
    this.setState(()=>{
        return{
            modalProduct:product,
            modalOpen:true
        }
    })
}
// openModalVeg =id =>{
  
//     const vegetables = this.getFrItem(id);
//     this.setState(()=>{
//         return{
//             modalProductFr:  vegetables,
//             modalOpen:true
//         }
//     })
// }
// openModalDr =id =>{
  
//     const drink = this.getDrItem(id);
//     this.setState(()=>{
//         return{
//             modalProductDr:  drink,
//             modalOpen:true
//         }
//     })
// }
// openModalTo =id =>{
  
//     const toilet = this.getToItem(id);
//     this.setState(()=>{
//         return{
//             modalProductTo: toilet,
//             modalOpen:true
//         }
//     })
// }


closeModal = () =>{
    this.setState(()=>{
        return{ modalOpen: false,
            products:  dairyProducts  }
    })
}

increment =(id) =>{
   let tempCart = [...this.state.cart];
   const selectedProduct = tempCart.find(item=>item.id === id);
   const index = tempCart.indexOf(selectedProduct);
   const product = tempCart[index];

   product.count = product.count + 1;
   product.total =product.count * product.price;

   this.setState(()=>{return {cart: [...tempCart]}}, ()=>{this.addTotals()})
    
}

decrement =(id) =>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

if (product.count ===0){
    this.removeItem(id)
}else{
    product.total =product.count * product.price;
}

     this.setState(()=>{return {cart: [...tempCart]}}, ()=>{this.addTotals()})
    
}

removeItem =id =>{
    let temProducts=[...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item=> item.id !== id);

    const index =temProducts.indexOf(this.getItem(id));
    let removedProduct = temProducts[index];
    removedProduct.incart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;


    this.setState(()=>{
        return{
            cart:[...tempCart],
            products:[...temProducts]
        };
    },()=>{
        this.addTotals()
    })
}

clearCart=()=>{
    this.setState(()=>{
        return {cart: []}
    }, ()=>{
        this.setProducts();
        this.addTotals();
    })
    
}
addTotals= ()=>{
    let subTotal =0;
    this.state.cart.map(item =>(subTotal +=item.total))
    const temTax = subTotal *0.1;
    const tax = parseFloat(temTax.toFixed(2));
    const total =subTotal + tax
    this.setState(()=>{
        return{
            cartSubTotal:subTotal,
            cartTax: tax,
            cartTotal: total
        }
    })
}
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleDetailFr: this.handleDetailFr,
                handleDetailDr: this.handleDetailDr,
                handleDetailTo: this.handleDetailTo,

                addToCart: this.addToCart,
                addFruitsToCart: this.addFruitsToCart,
                addDrinksToCart: this.addDrinksToCart,
                addToiletriesToCart: this.addToiletriesToCart,


                openModal:this.openModal,
                openModalVeg:this.openModalVeg,
                openModalDr:this.openModalDr,
                openModalTo:this.openModalTo,
                closeModal:this.closeModal,

                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
                   
            }}>
                {this.props.children}
            </ProductContext.Provider>
                                
        )
    }
}
const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer};


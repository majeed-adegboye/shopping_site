import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from "./context";
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import FBConfig from './config/FBConfig';
import rootReducer from './store/reducer/rootReducer'
import {Provider} from 'react-redux';


const store = createStore (rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(FBConfig),
        reactReduxFirebase(FBConfig, 
        {useFirestoreForProfile: true, 
            userProfile: "users", 
            attachAuthIsReady: true})
        )
    );

    store.firebaseAuthIsReady.then(()=>{
        ReactDOM.render(
            <Provider store={store}>
             
             <ProductProvider>
             
             <Router>
               
                <App />
              
             </Router>
             
             </ProductProvider>
         
             </Provider>,
            
         
             
             
            
         
         
             
         document.getElementById('root'));

    })

    



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//  
 
/* <VegProvider>
    <Router>
      
       <App />
     
    </Router>
    </VegProvider>, */
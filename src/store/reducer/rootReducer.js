import authReducer from './authReducer';
import commetReducer from './commentReducer';
import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
        auth:authReducer,
        comment: commetReducer,
        firebase: firebaseReducer,
        firestore: firestoreReducer

});

export default rootReducer;
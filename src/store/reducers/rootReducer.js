import projectReducer from './projectReducer';
import authReducer from './authReducer';
import {
    combineReducers
} from 'redux';

export default combineReducers({
    project: projectReducer,
    auth: authReducer
})
import { combineReducers } from 'redux'
import phones from './phones'
import { loadingBarReducer } from 'react-redux-loading-bar'


export default combineReducers({
    phones,
    loadingBar: loadingBarReducer
})
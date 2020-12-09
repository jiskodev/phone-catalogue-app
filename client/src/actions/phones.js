import * as api from '../api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

// ACTION CREATORS

export const getPhones = () => async(dispatch) => {
    try {
        dispatch(showLoading())
        const { data } = await api.fetchPhones()
        dispatch({ type: 'FETCH_ALL', payload: data })
        dispatch(hideLoading())
    } catch(error) {
        console.log(error.message)
    }
}

export const addPhone = (phone) => async(dispatch) => {
    try {
        dispatch(showLoading())
        const { data } = await api.addPhone(phone)
        dispatch(hideLoading())
        dispatch({ type: 'CREATE', payload: data })
    } catch(error) {
        console.log(error.message)
    }
}

export const updatePhone = (id, phone) => async(dispatch) => {
    try {
        dispatch(showLoading())
        const { data } = await api.updatePhone(id, phone)
        console.log(data)
        dispatch(hideLoading())
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePhone = (id) => async(dispatch) => {
    try{
        dispatch(showLoading())
        const {data} = await api.deletePhone(id)
        console.log(data)
        dispatch(hideLoading())
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}
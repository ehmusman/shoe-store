import React, { useReducer } from 'react';
import StoreReducer from './storeReducer'
import StoreContext from './storeContext'
import Control from '../components/Control/Control'

const StoreState = (props) => {
    const initialState = {
        initialValues: [
            {
                id: 1, fullName: 'Usman', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 2, fullName: 'Ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 3, fullName: 'ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 4, fullName: 'Usman', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 5, fullName: 'rashid', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 6, fullName: 'hamza', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 7, fullName: 'nawaz', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 8, fullName: 'Umer', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            }

        ]
    }

    const [state, dispatch] = useReducer(StoreReducer, initialState)
    // dispatch({
    //     type: action.type,
    //     payload: action.payload
    // })
    return <StoreContext.Provider
        value={{
            initialValues: state.initialValues,

        }}>
        {props.children}
    </StoreContext.Provider>

}

export default FormState;
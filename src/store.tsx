import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import accessorReducer from "./reducers/accessorReducer"


export interface rootStoreT {
  accessor: string
}

const rootReducer = combineReducers({
  accessor: accessorReducer
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
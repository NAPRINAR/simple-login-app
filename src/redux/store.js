import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import {users__reducer} from "./reducers/users__reducer";

const reducers = combineReducers({
    users__reducer
})

export const store = createStore(reducers,applyMiddleware(compose(thunk)))
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import joblistReducer from '../reducers/joblistReducer'

const principalReducer=combineReducers({
  favourite:favouriteReducer,
  franco:joblistReducer
})

const store = configureStore({
  reducer: principalReducer,
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import users from './reducers/UserSlice'

const store = configureStore({
    reducer: { users },

})
export default store;
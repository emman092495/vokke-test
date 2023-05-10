import { configureStore } from '@reduxjs/toolkit'
import kangarooSlice from './reducers/kangaroo_slice'

export default configureStore({
  reducer: {
    listings: kangarooSlice,
  },
})
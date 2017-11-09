import { combineReducers } from 'redux'

import booksReducer from './reducer_books'

const reducer = combineReducers({
  books:booksReducer

})

export default reducer

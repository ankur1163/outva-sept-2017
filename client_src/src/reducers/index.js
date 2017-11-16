import { combineReducers } from 'redux'

import booksReducer from './reducer_books'
import projectlist from './projects_list';

const reducer = combineReducers({
  books:booksReducer,
  projectlist:projectlist

})

export default reducer

import { combineReducers } from 'redux'

import exampleLists from './Example/list'
import { getBoardList, createBoard } from './Board'


export default combineReducers({
  exampleLists,
  getBoardList,
  createBoard,
})
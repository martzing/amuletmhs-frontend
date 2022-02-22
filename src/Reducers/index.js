import { combineReducers } from 'redux'

import exampleLists from './Example/list'
import { getBoardList, createBoard, requestUpdateBoard, updateBoard } from './Board'


export default combineReducers({
  exampleLists,
  getBoardList,
  createBoard,
  requestUpdateBoard,
  updateBoard,
})
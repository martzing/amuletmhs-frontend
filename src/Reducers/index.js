import { combineReducers } from 'redux'

import exampleLists from './Example/list'
import { getBoardList, createBoard, requestUpdateBoard, updateBoard } from './Board'
import { getBoard, createBoardItem, requestUpdateBoardItem, updateBoardItem, getRewardList } from './BoardItem'


export default combineReducers({
  exampleLists,
  getBoardList,
  createBoard,
  requestUpdateBoard,
  updateBoard,
  getBoard,
  createBoardItem,
  requestUpdateBoardItem,
  updateBoardItem,
  getRewardList,
})
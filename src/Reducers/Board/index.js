import {
  GET_BOARD_LIST,
  GET_BOARD_LIST_SUCCESS,
  GET_BOARD_LIST_FAIL,
  CREATE_BOARD,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAIL,
} from './../../Actions/constant'

export const getBoardList = (state = {}, action) => {
  switch (action.type) {
    case GET_BOARD_LIST_SUCCESS:
      return action
    case GET_BOARD_LIST:
      return action
    case GET_BOARD_LIST_FAIL:
    default:
      return state
  }
}

export const createBoard = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOARD_SUCCESS:
      return action
    case CREATE_BOARD:
      return action
    case CREATE_BOARD_FAIL:
    default:
      return state
  }
}

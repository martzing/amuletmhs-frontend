import {
  GET_BOARD_LIST,
  GET_BOARD_LIST_SUCCESS,
  GET_BOARD_LIST_FAIL,
  CREATE_BOARD,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAIL,
  REQUEST_UPDATE_BOARD,
  UPDATE_BOARD_LIST,
  UPDATE_BOARD_LIST_SUCCESS,
  UPDATE_BOARD_LIST_FAIL,
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

const initUpdateBoard = {
  data: {
    boardId: 0,
    name: '',
    cost: 0,
    ticketPrice: 0,
    totalTicket: 0,
  }
}

export const requestUpdateBoard = (state = initUpdateBoard, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_BOARD:
      return action
    default:
      return state
  }
}

export const updateBoard = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BOARD_LIST_SUCCESS:
      return action
    case UPDATE_BOARD_LIST:
      return action
    case UPDATE_BOARD_LIST_FAIL:
    default:
      return state
  }
}

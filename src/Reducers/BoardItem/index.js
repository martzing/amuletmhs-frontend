import {
  GET_BOARD,
  GET_BOARD_SUCCESS,
  GET_BOARD_FAIL,
  CREAT_BOARD_ITEM_LIST,
  CREAT_BOARD_ITEM_LIST_SUCCESS,
  CREAT_BOARD_ITEM_LIST_FAIL,
  REQUEST_UPDATE_BOARD_ITEM,
  UPDATE_BOARD_ITEM_LIST,
  UPDATE_BOARD_ITEM_LIST_SUCCESS,
  UPDATE_BOARD_ITEM_LIST_FAIL,
  GET_REWARD_LIST,
  GET_REWARD_LIST_SUCCESS,
  GET_REWARD_LIST_FAIL,
} from './../../Actions/constant'

export const getBoard = (state = {}, action) => {
  switch (action.type) {
    case GET_BOARD_SUCCESS:
      return action
    case GET_BOARD:
      return action
    case GET_BOARD_FAIL:
    default:
      return state
  }
}

export const createBoardItem = (state = {}, action) => {
  switch (action.type) {
    case CREAT_BOARD_ITEM_LIST_SUCCESS:
      return action
    case CREAT_BOARD_ITEM_LIST:
      return action
    case CREAT_BOARD_ITEM_LIST_FAIL:
    default:
      return state
  }
}

const initUpdateBoard = {
  data: {
    boardItemListId: 0,
    customerName: '',
    sellTicketAmount: '',
    freeTicketAmount: '',
  }
}

export const requestUpdateBoardItem = (state = initUpdateBoard, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_BOARD_ITEM:
      return action
    default:
      return state
  }
}

export const updateBoardItem = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BOARD_ITEM_LIST_SUCCESS:
      return action
    case UPDATE_BOARD_ITEM_LIST:
      return action
    case UPDATE_BOARD_ITEM_LIST_FAIL:
    default:
      return state
  }
}

export const getRewardList = (state = {}, action) => {
  switch (action.type) {
    case GET_REWARD_LIST_SUCCESS:
      return action
    case GET_REWARD_LIST:
      return action
    case GET_REWARD_LIST_FAIL:
    default:
      return state
  }
}
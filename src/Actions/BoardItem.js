import axios from 'axios'
import qs from 'qs'
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
  // CREAT_REWARD_LIST,
  // CREAT_REWARD_LISTS_UCCESS,
  // CREAT_REWARD_LIST_FAIL,
} from './constant'

export const getBoard = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_BOARD })
    try {
      const options = {
        method: 'get',
        url: `http://localhost:9000/v1/board/${id}`,
      }
      const { data } = await axios(options)
      dispatch({
        type: GET_BOARD_SUCCESS,
        data,
      })
    } catch (err) {
      dispatch({ type: GET_BOARD_FAIL })
    }
  }
}

export const createBoardItem = ({
  boardId,
  customerName,
  sellTicketAmount,
  freeTicketAmount,
}) => {
  return async (dispatch) => {
    dispatch({ type: CREAT_BOARD_ITEM_LIST })
    try {
      const body = {
        board_id: boardId,
        customer_name: customerName,
        sell_ticket_amount: sellTicketAmount,
      }
      if (freeTicketAmount && freeTicketAmount !== '') {
        body.free_ticket_amount = freeTicketAmount
      }
      const options = {
        method: 'post',
        url: 'http://localhost:9000/v1/board/list',
        headers: { 
          'x-user-id': '1', 
          'Content-Type': 'application/json'
        },
        data: body,
      }
      const { data } = await axios(options)
      dispatch({
        type: CREAT_BOARD_ITEM_LIST_SUCCESS,
        data,
      })
    } catch (err) {
      dispatch({ type: CREAT_BOARD_ITEM_LIST_FAIL })
    }
  }
}

export const requestUpdateBoardItem = ({ boardItemListId, customerName, sellTicketAmount, freeTicketAmount }) => {
  return async (dispatch) => {
    const data = {
      boardItemListId,
      customerName,
      sellTicketAmount,
      freeTicketAmount,
    }
    dispatch({ type: REQUEST_UPDATE_BOARD_ITEM, data })
  }
}

export const updateBoardItem = ({
  boardItemListId,
  customerName,
  sellTicketAmount,
  freeTicketAmount, }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_BOARD_ITEM_LIST })
    try {
      const body = {
        board_item_list_id: boardItemListId,
      }
      if ((customerName !== null || customerName !== undefined)  && customerName !== '') {
        body.customer_name = customerName
      }
      if ((sellTicketAmount !== null || sellTicketAmount !== undefined) && sellTicketAmount !== '') {
        body.sell_ticket_amount = sellTicketAmount
      }
      if ((freeTicketAmount !== null || freeTicketAmount !== undefined) && freeTicketAmount !== '') {
        body.free_ticket_amount = freeTicketAmount
      }
      const options = {
        method: 'patch',
        url: 'http://localhost:9000/v1/board/list',
        headers: { 
          'x-user-id': '1', 
          'Content-Type': 'application/json'
        },
        data: body,
      }
      const { data, status } = await axios(options)
      if (status !== 200) {
        dispatch({ type: UPDATE_BOARD_ITEM_LIST_FAIL, data })
      } else {
        dispatch({
          type: UPDATE_BOARD_ITEM_LIST_SUCCESS,
          data,
        })
      }
    } catch (err) {
      dispatch({ type: UPDATE_BOARD_ITEM_LIST_FAIL })
    }
  }
}

export const getRewardList = (boardItemListId) => {
  return async (dispatch) => {
    dispatch({ type: GET_REWARD_LIST })
    try {
      const query = qs.stringify({ board_item_list_id : boardItemListId})
      const options = {
        method: 'get',
        url: `http://localhost:9000/v1/board/reward?${query}`,
      }
      const { data } = await axios(options)
      dispatch({
        type: GET_REWARD_LIST_SUCCESS,
        data,
      })
    } catch (err) {
      dispatch({ type: GET_REWARD_LIST_FAIL })
    }
  }
}

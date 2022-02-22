import axios from 'axios'
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
} from './constant'

export const getBoardList = () => {
  return async (dispatch) => {
    dispatch({ type: GET_BOARD_LIST })
    try {
      const options = {
        method: 'get',
        url: 'http://localhost:9000/v1/board',
      }
      const { data } = await axios(options)
      dispatch({
        type: GET_BOARD_LIST_SUCCESS,
        data,
      })
    } catch (err) {
      dispatch({ type: GET_BOARD_LIST_FAIL })
    }
  }
}

export const createBoard = ({ name, cost, ticketPrice, totalTicket }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_BOARD })
    try {
      const body = JSON.stringify({
        name,
        cost,
        ticket_price: ticketPrice,
        total_ticket: totalTicket,
      })
      const options = {
        method: 'post',
        url: 'http://localhost:9000/v1/board',
        headers: { 
          'x-user-id': '1', 
          'Content-Type': 'application/json'
        },
        data: body,
      }
      const { data } = await axios(options)
      dispatch({
        type: CREATE_BOARD_SUCCESS,
        data,
      })
    } catch (err) {
      dispatch({ type: CREATE_BOARD_FAIL })
    }
  }
}

export const requestUpdateBoard = ({ boardId, name, cost, ticketPrice, totalTicket }) => {
  return async (dispatch) => {
    const data = {
      boardId,
      name,
      cost,
      ticketPrice,
      totalTicket,
    }
    dispatch({ type: REQUEST_UPDATE_BOARD, data })
  }
}

export const updateBoard = ({ boardId, name, cost, ticketPrice, totalTicket }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_BOARD_LIST })
    try {
      const body = JSON.stringify({
        board_id: boardId,
        name,
        cost,
        ticket_price: ticketPrice,
        total_ticket: totalTicket,
      })
      const options = {
        method: 'patch',
        url: 'http://localhost:9000/v1/board',
        headers: { 
          'x-user-id': '1', 
          'Content-Type': 'application/json'
        },
        data: body,
      }
      const { data, status } = await axios(options)
      if (status !== 200) {
        dispatch({ type: UPDATE_BOARD_LIST_FAIL, data })
      } else {
        dispatch({
          type: UPDATE_BOARD_LIST_SUCCESS,
          data,
        })
      }
    } catch (err) {
      dispatch({ type: UPDATE_BOARD_LIST_FAIL })
    }
  }
}

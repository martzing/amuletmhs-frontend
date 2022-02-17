import axios from 'axios'

export const exampleGetLists = () => {
  return async (dispatch) => {
    dispatch({
      type: 'EXAMPLE_LISTS_CLEAR'
    })
    await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1', {
      method: 'GET',
    }).then((response) => {
      dispatch({
        type: 'EXAMPLE_LISTS_SUCCESS',
        data: response.data
      })
    }).catch((err) => {
      dispatch({
        type: 'EXAMPLE_LISTS_FAIL'
      })
    })
  }
}
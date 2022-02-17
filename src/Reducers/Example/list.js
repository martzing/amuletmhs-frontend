export const EXAMPLE_LISTS_SUCCESS = 'EXAMPLE_LISTS_SUCCESS'
export const EXAMPLE_LISTS_CLEAR = 'EXAMPLE_LISTS_CLEAR'
export const EXAMPLE_LISTS_FAIL = 'EXAMPLE_LISTS_FAIL'

export default function exampleLists (state = {}, action) {
  switch (action.type) {
    case EXAMPLE_LISTS_SUCCESS:
      return action
    case EXAMPLE_LISTS_CLEAR:
      return action
    case EXAMPLE_LISTS_FAIL:
    default:
      return state
  }
}

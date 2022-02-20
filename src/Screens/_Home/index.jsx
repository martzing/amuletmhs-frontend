import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// actions
import { exampleGetLists } from '../../Actions/Example'

const Home = () => {
  // Redux
  const dispatch = useDispatch()
  const exampleLists = useSelector(state => state.exampleLists)
  useMemo(() => {
    dispatch(exampleGetLists())
  }, [])

  return (
    <div>
      <ul>
        {exampleLists.data?.map((data, index) =>
          <li key={index}>{data.body}</li>
        )}
      </ul>
    </div>
  )
}

export default Home

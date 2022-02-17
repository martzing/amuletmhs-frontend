import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"



// layout
import Layout from '../Layout'

// Screens
import Home from '../Screens/Home'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes
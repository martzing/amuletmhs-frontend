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
import Main from '../Screens/Main'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/main" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes
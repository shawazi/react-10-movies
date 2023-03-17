import React from 'react'
import {Route} from "react-router-dom"
import Register from '../pages/Register'

const Router = () => {
  return (
    <>
        <Route path="/" element={<Register />} />
    </>
  )
}

export default Router

// not sure how to use this router file, so i just put the routes in my app.js
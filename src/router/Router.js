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
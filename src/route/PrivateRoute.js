import React from 'react'
import DetailPage from '../pages/DetailPage'
import { Navigate } from 'react-router'

const PrivateRoute = ({authenticate}) => {
  return authenticate == true ? <DetailPage /> : <Navigate to= '/login' />
}

export default PrivateRoute
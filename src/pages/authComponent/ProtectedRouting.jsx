import React from 'react'
import isAuthorized from '../../utils/Auth'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProtectedRouting = () => {
  // isAuthorized ? <Outlet/> : <Navigate to='/login' replace/>

  if (!isAuthorized()) {
    toast.error("Please Login")
    return <Navigate to='/login' />
  } else {
    return <Outlet />
  }

}

export default ProtectedRouting


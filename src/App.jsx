import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Courses from './pages/courseComponent/Courses'
import ContactUs from './pages/authComponent/ContactUs'
import Trainers from './pages/trainerComponent/Trainers'
import Login from './pages/authComponent/Login'
import Register from './pages/authComponent/Register'
import PageNotFound from './pages/PageNotFound'
import CreateCourse from './pages/courseComponent/CreateCourse'

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/trainer",
          element: <Trainers />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/createCourse",
          element: <CreateCourse />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App

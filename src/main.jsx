import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import About from './components/Home/About';
import UpdateProfile from './components/Home/UpdateProfile';
import UserProfile from './components/Home/UserProfile';
import LogIn from './components/Authentication/LogIn';
import Registration from './components/Authentication/Registration';
import Deatails from './components/Deatails';



// routes.....
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader : ()=>fetch('/fakeData.json')
      },
      {
        path: '/details/:id',
        element: <Deatails></Deatails>,
        loader : ()=>fetch('/fakeData.json')
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>,
      },
      {
        path: '/login',
        element: <LogIn></LogIn>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

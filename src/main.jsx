import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home'
// import Enlightment from './pages/enlightment/Enlightment'
import PagesNotFound from './pages/pagenotfound/PageNotFound'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import './index.css'







const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  // {
  //   path: "/enlightment",
  //   element: <Enlightment/>,
  // },
  {
    path: "/*",
    element: <PagesNotFound/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Task />
//   </React.StrictMode>,
// )

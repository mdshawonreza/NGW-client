import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import OurBrands from './components/OurBrands/OurBrands';
import BrandProducts from './components/OurBrands/BrandProducts';
import OurProducts from './components/OurProducts/OurProducts';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/ourBrands',
        element: <OurBrands></OurBrands>
      },
      {
        path:'/brandProducts/:brandName',
        element:<BrandProducts></BrandProducts>,
       
      },
      {
        path: '/ourProducts',
        element: <OurProducts></OurProducts>
      },


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

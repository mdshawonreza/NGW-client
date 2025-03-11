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
import OurTeam from './components/OurTeam/OurTeam';
import ContactForm from './components/ContactUs/ContactForm';
import AboutUs from './components/AboutUs/AboutUs';



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
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
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
      {
        path: '/ourTeam',
        element: <OurTeam></OurTeam>
      },
      {
        path: '/contactUs',
        element: <ContactForm></ContactForm>
      },


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

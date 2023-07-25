import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <div className='bg-base-300'>
   <RouterProvider router={router} />
   </div>
    </AuthProviders>
  </React.StrictMode>,
)

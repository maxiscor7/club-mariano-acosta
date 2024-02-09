import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <h1>Error</h1>
    },
    {
        path: "/contact",
        element: <Contact/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}/>
  
);



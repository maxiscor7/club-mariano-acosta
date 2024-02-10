import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Disiplines from './routes/Disciplines';
import Club from './routes/Club';
import Contact from './routes/Contact';
import Events from './routes/Events';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <h1>Error</h1>
    },
    {
        path: "/disiplinas",
        element: <Disiplines/>,
    },
    {
        path: "/club",
        element: <Club/>,
    },
    {
        path: "/eventos",
        element: <Events/>,
    },
    {
        path: "/contacto",
        element: <Contact/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}/>
  
);



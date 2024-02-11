import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home';
import Contact from './routes/Contact';
import Events from './routes/Events';
import Taekwondo from './routes/Taekwondo/Taekwondo';
import PatinArtistico from './routes/PatinArtistico';
import KickBoxing from './routes/KickBoxing';
import RitmosUrbanos from './routes/RitmosUrbanos';
import Zumba from './routes/Zumba';
import Taebo from './routes/Taebo';
import Hockey from './routes/Hockey';
import Rock from './routes/Rock';
import Voley from './routes/Voley';
import FutbolFemenino from './routes/FutbolFemenino';
import ReggaetonInfantil from './routes/ReggatonInfantil';
import AcroDance from './routes/AcroDance';
import FutbolMasculino from './routes/FutbolMasculino';
import EscuelaDePadle from './routes/EscuelaDePadle';
import Basquetbol from './routes/Basquetbol';
import Historia from './routes/Historia';
import Instalaciones from './routes/Instalaciones';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <h1>Error</h1>
    },
    {
        path: "/eventos",
        element: <Events/>,
    },
    {
        path: "/contacto",
        element: <Contact/>,
    },
    {
        path: "/taekwondo",
        element: <Taekwondo/>,
    },
    {
        path: "/partin-artistico",
        element: <PatinArtistico/>,
    },
    {
        path: "/kick-boxing",
        element: <KickBoxing/>,
    },
    {
        path: "/ritmos-urbanos",
        element: <RitmosUrbanos/>,
    },
    {
        path: "/zumba",
        element: <Zumba/>,
    },
    {
        path: "/taebo",
        element: <Taebo/>,
    },
    {
        path: "/hockey",
        element: <Hockey/>,
    },
    {
        path: "/rock",
        element: <Rock/>,
    },
    {
        path: "/voley",
        element: <Voley/>,
    },
    {
        path: "/futbol-femenino",
        element: <FutbolFemenino/>,
    },
    {
        path: "/reggaeton-infantil",
        element: <ReggaetonInfantil/>,
    },
    {
        path: "/acro-dance",
        element: <AcroDance/>,
    },
    {
        path: "/futbol-masculino",
        element: <FutbolMasculino/>,
    },
    {
        path: "/escuela-de-padle",
        element: <EscuelaDePadle/>,
    },
    {
        path: "/basquetbol",
        element: <Basquetbol/>,
    },
    {
        path: "/historia",
        element: <Historia/>,
    },
    {
        path: "/instalaciones",
        element: <Instalaciones/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}/>
  
);



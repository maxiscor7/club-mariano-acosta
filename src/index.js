import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home';
import Contact from './routes/Contact';
import Events from './routes/Events';
import Taekwondo from './routes/Taekwondo/Taekwondo';
import Hockey from './routes/Hockey/Hockey';
import Voley from './routes/Voley/Voley';
import Basquetbol from './routes/Basquetbol/Basquetbol';
import FutbolFemenino from './routes/FutboolFemenino/FutbolFemenino';
import FutbolMasculino from './routes/FutbolMasculino/FutbolMasculino';
import RitmosUrbanos from './routes/RitmosUrbanos/RitmosUrbanos';
import PatinArtistico from './routes/PatinArtistico';
import KickBoxing from './routes/KickBoxing';
import Zumba from './routes/Zumba';
import Rock from './routes/Rock';
import ReggaetonInfantil from './routes/ReggatonInfantil';
import EscuelaDePadle from './routes/EscuelaDePadle';
import Historia from './routes/Historia';
import SedeSocial from './routes/SedeSocial';
import AnexoPoli from './routes/AnexoPoli';
import Folklore from './routes/Folklore';
import Socios from './routes/Socios/Socios';
import Noticias from './routes/Noticias';
import Indumentaria from "./routes/Indumentaria";
/*
import Galeries from './routes/Galeries';
*/

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
        path: "/indumentaria",
        element: <Indumentaria/>
    },
    {
        path: "/anexo-polideportivo",
        element: <AnexoPoli/>,
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
        path: "/folklore",
        element: <Folklore/>
    },
    {
        path: "/socios",
        element: <Socios/>
    },
    {
        path: "/historia",
        element: <Historia/>,
    },
    {
        path: "/noticias",
        element: <Noticias/>
    },
    {
        path: "/sede-social",
        element: <SedeSocial/>,
    },/*  --------------- esto sacarlo cuando este disponible galerias para mostrar
    {
        path: "/galeries",
        element: <Galeries />,
    }*/
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}/>
  
);



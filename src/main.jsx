import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//BLOCO DAS ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Erro404 from './Routes/Erro404.jsx';
import Ir from './Routes/Ir.jsx';
import Hospitais from './Routes/Hospitais/Hospitais.jsx'
import Ambulancias from './Routes/Ambulancias.jsx'
import Diagnostico from './Routes/Diagnostico.jsx'
import Perfil from './Routes/Perfil/Perfil.jsx'

//BLOCO DAS ROTAS
const router = createBrowserRouter([
  {path:"/",element: <App/>,errorElement:<Erro404/>,
   children:[
    {path:"/", element:<Ir/>},
    {path:"/hospitais",element:<Hospitais/>},
    {path:"/ambulancias", element:<Ambulancias/>},
    {path:"/diagnostico", element:<Diagnostico/>},
    {path:"/perfil", element:<Perfil/>},
   ]
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

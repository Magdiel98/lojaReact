import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


import Principal from './pages/Principal/Principal';
import Cadastro from './pages/Cadastro/Cadastro';
import Carrinho from './pages/Carrinho/Carrinho';
import Tabela from './pages/Tabela/Tabela';
import ProdutoAcao from './pages/ProdutoAcao/ProdutoAcao';

import Compra from './pages/Compra/Compra';
import Conta from './pages/Conta/Conta';
import FaleConosco from './pages/FaleConosco/FaleConosco';
import Login from './pages/Login/Login';

import Produto from './pages/PaginasProdutos/Produto';
import Categoria from './pages/Categorias/Categoria';



import ErrorPage from './pages/Error/Error';
import AtualizarConta from './pages/Conta/AtualizarConta';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Principal />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/carrinho", 
        element: <Carrinho />
      },
      {
        path: "/categoria",
        element: <Categoria />
      },
      {
        path: "/compra",
        element: <Compra />
      },
      {
        path: "/conta",
        element: <Conta />
      },
      {
        path: "/atualizarconta", 
        element: <AtualizarConta />
      },
      {
        path: "/faleconosco",
        element: <FaleConosco />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/produto",
        element: <Produto />
      },
      {
        path: "/tabela",
        element: <Tabela />
      },
      {
        path: "/produtoacao",
        element: <ProdutoAcao />
      }
    ],
  },
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

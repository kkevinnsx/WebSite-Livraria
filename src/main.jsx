import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";
import NavBarComponent from './components/NewNavBarComponents.jsx';
import HomePage from './pages/homepage.jsx';
import Book     from './pages/book.jsx';
import Movies   from './pages/movies.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const router = createBrowserRouter([
    {
    path: "/",
    element: <br />
  },
  
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  
  {
    path: "/Book",
    element: <Book />,
  },

  {
    path: "/Movies",
    element: <Movies />,
  },

  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  
  {
    path: "/RegisterPage",
    element: <RegisterPage />,
  },
]);

const main = () => {
  return(
    <>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBarComponent />
    <RouterProvider router={router} />
  </React.StrictMode>  
)

export default main;
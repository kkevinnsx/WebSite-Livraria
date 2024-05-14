import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";
import NavBarComponent from '../src/Components/NewNavBarComponents.jsx';
import HomePage from './pages/HomePage.jsx';
import Book     from './pages/Book.jsx';
import Movies   from './pages/Movies.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

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
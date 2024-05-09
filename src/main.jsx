import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";
import NavBarComponent from './components/NewNavBarComponents.jsx';
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
      
<Carousel>
<Carousel.Item>
  <ExampleCarouselImage text="First slide" />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <ExampleCarouselImage text="Second slide" />
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <ExampleCarouselImage text="Third slide" />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
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
import React, {lazy} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from './components/Loading/Loading';

const HomePage = lazy(()=> import('./pages/Home'));
const AppPage = lazy(()=> import ('./pages/Application'));
const RouteNotFoundPage = React.lazy(() => import('./pages/RouteNotFound'));
const GlobalErrorPage = React.lazy(() => import('./pages/GlobalError'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const About = React.lazy(() => import('./pages/About'));

const router = createBrowserRouter([
  {
    element: <GlobalErrorPage />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/app", 
        element: <AppPage/> ,
      },
      {
        path: "/login", 
        element: <Login/> ,
      },
      {
        path: "/register", 
        element: <Register/> ,
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "*", 
        element: <RouteNotFoundPage />,
      },
    ]
  }
]); 

function App() {
  return (
    <div className="App " >
        <React.Suspense fallback={<Loading/>}>
          <RouterProvider router={router} />
        </React.Suspense>
    </div>
  )
}

export default App;

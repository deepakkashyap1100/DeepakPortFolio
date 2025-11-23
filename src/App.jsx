
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppLayout from './Layout/AppLayout';
import ErrorComp from './Components/ErrorComp';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact, { } from './Pages/Contact';
import MySkill from './Pages/MySkill';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorComp />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/skill',
          element: <MySkill />
        },
        {
          path: '/project',
          element: <Projects />,
          // loader: getApi
        },
        {
          path: '/contact',
          element: <Contact />,
          // action: contactFormData
        }
      ]
    },

  ]);
  return (<RouterProvider
    router={router} future={{ v7_startTransition: true, }}
  />

  )
}

export default App

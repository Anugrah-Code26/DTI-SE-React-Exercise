import "./components/styles/hero.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { WorkProject } from './pages/workProject';
import { AboutDetail } from './pages/aboutDetail';
import { Layout } from "./layout/layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <AboutDetail /> },
        { path: "/work", element: <WorkProject /> },
        { path: "/contact", element: <Contact /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

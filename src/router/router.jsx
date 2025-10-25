import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../layouts/Home";
import ProjectDetails from "../pages/ProjectDetails";
import About from "../layouts/About";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path:'/about',
          Component: About
        },
        {
          path: '/contact',
          Component: Contact
        },
        {
          path:'/projects/:id',
          Component: ProjectDetails
        }
    ]
  },
]);
import React, {  } from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/views/about/about";
import Contact from "../pages/contact/contact";
import Layout from "./layout";
import Home from "../pages/home/home";
import Portfolio from "../pages/portfolio/portfolio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "/contact", element: <Contact /> },
            { path: "/about", element: <About /> },
            { path: "/portfolio", element: <Portfolio /> },
        ],
    },
]);


import React, {  } from "react";
import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact/contact";
import Layout from "./layout";
import Home from "../pages/home/home";
import Portfolio from "../pages/portfolio/portfolio";
import About from "../pages/about/about";

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


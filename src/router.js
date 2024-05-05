import React, {  } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/views/home/home";
import Portfolio from "./components/views/portfolio/portfolio";
import About from "./components/views/about/about";
import Contact from "./components/views/contact/contact";
import Layout from "./router/layout";

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


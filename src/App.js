import React, { Component } from "react";
import "./App.scss";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

class App extends Component {
    render() {
        return <RouterProvider router={router}></RouterProvider>;
    }
}

export default App;

import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavMobile from "../components/nav-mobile/navMobile";
import CloseWindow from "../components/close-window/closeWindow";

const Layout = () => {
    return (
        <Fragment>
            <NavMobile />
            <CloseWindow></CloseWindow>
            <main className="container">
                <Outlet />
            </main>
        </Fragment>
    );
};

export default Layout;

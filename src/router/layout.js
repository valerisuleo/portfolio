import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavMobile from "../shared/nav-mobile/navMobile";
import CloseWindow from "../shared/library/close-window/closeWindow";

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

import {MainTabs} from "./Features/MainTabs";
import {Outlet} from "react-router-dom";
import React from "react";

export const Main = () => {
    return (
            <div className='app-container'>
                <MainTabs />
                <div className='app-container__content'>
                    <Outlet />
                </div>
            </div>
    )
}
import React from 'react';
import {Outlet} from "react-router-dom";

function MainLayout(){
        return (
            <>
                <div className="h-full min-h-screen bg-stone-200">
                    <Outlet/>
                </div>
            </>
        );
}

export default MainLayout;
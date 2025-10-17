import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='mx-12 mt-4'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
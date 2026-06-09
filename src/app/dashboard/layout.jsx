import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (

        <div className='mt-30 flex gap-10 min-h-screen'>
            <DashboardSidebar />
            <div className='flex-1'>
                {children}
            </div>
        </div>

    );
};

export default DashboardLayout;
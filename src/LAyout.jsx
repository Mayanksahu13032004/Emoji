// DashboardLayout.js
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
    return (
        <div className="flex h-screen">
            <Dashboard />
            <main className="w-[80%] p-8">
                <Outlet />
            </main>
        </div>
    );
}

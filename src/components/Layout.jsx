import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { AuthProvider } from '@/context/AuthContext';

function Layout() {
  return (
    <div className="wrapper">
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
}

export default Layout;

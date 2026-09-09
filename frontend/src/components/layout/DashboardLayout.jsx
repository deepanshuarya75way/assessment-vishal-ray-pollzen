import { Outlet } from "react-router-dom";

import AppSidebar from "./AppSidebar";
import AppNavbar from "./AppNavbar";

export default function DashboardLayout() {
     return (
          <div className="flex min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
               <AppSidebar />

               <div className="flex flex-1 flex-col">
                    <AppNavbar />

                    <main className="flex-1 p-6">
                         <Outlet />
                    </main>
               </div>
          </div>
     );
}
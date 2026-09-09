import { Outlet } from "react-router-dom";
import SiteNavbar from "@/components/layout/SiteNavbar";
import SiteFooter from "@/components/layout/SiteFooter";

export default function AuthLayout() {
     return (
          <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
               <SiteNavbar />

               <div className="flex flex-1 items-center justify-center p-6">
                    <div className="w-full max-w-4xl px-4">
                         <Outlet />
                    </div>
               </div>

               <SiteFooter />
          </div>
     );
}
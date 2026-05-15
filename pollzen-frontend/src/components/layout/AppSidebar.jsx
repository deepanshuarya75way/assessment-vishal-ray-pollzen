import { NavLink } from "react-router-dom";

import { dashboardNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function AppSidebar() {
     return (
          <aside className="hidden lg:flex h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950">
               <div className="flex items-center h-16 px-6 border-b border-zinc-800">
                    <h1 className="text-xl font-bold tracking-tight">
                         PollZen
                    </h1>
               </div>

               <nav className="flex-1 p-4 space-y-2">
                    {dashboardNavigation.map((item) => {
                         const Icon = item.icon;

                         return (
                              <NavLink
                                   key={item.href}
                                   to={item.href}
                                   className={({ isActive }) =>
                                        cn(
                                             "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                                             "hover:bg-zinc-900",
                                             isActive
                                                  ? "bg-indigo-600 text-white"
                                                  : "text-zinc-400"
                                        )
                                   }
                              >
                                   <Icon size={18} />

                                   {item.title}
                              </NavLink>
                         );
                    })}
               </nav>
          </aside>
     );
}
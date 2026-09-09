import { NavLink } from "react-router-dom";

import { dashboardNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function AppSidebar() {
  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col" style={{ borderRight: '1px solid var(--sidebar-border)', background: 'var(--sidebar)', color: 'var(--sidebar-foreground)' }}>
      <div className="flex items-center h-16 px-6" style={{ borderBottom: '1px solid var(--sidebar-border)' }}>
        <h1 className="text-xl font-bold tracking-tight">PollZen</h1>
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
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-sidebar-accent"
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
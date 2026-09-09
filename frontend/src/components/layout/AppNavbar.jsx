import { Bell, Search } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function AppNavbar() {
  return (
    <header className="flex h-16 items-center justify-between px-6" style={{ borderBottom: '1px solid var(--sidebar-border)', background: 'var(--sidebar)', color: 'var(--sidebar-foreground)' }}>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />

          <Input placeholder="Search polls..." className="w-72 pl-9" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell size={20} />
        </button>

        <Avatar>
          <AvatarFallback>VR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
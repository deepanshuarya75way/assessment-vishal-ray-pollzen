import { Bell, Search } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function AppNavbar() {
     return (
          <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6">
               <div className="flex items-center gap-4">
                    <div className="relative hidden md:block">
                         <Search
                              size={16}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                         />

                         <Input
                              placeholder="Search polls..."
                              className="w-72 bg-zinc-900 border-zinc-800 pl-9"
                         />
                    </div>
               </div>

               <div className="flex items-center gap-4">
                    <button className="relative text-zinc-400 hover:text-white transition-colors">
                         <Bell size={20} />
                    </button>

                    <Avatar>
                         <AvatarFallback>
                              VR
                         </AvatarFallback>
                    </Avatar>
               </div>
          </header>
     );
}
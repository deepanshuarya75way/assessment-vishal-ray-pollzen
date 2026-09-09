import { LayoutDashboard, BarChart3, PlusSquare, Vote} from "lucide-react";

export const dashboardNavigation = [
     {
          title: "Dashboard",
          href: "/app/dashboard",
          icon: LayoutDashboard,
     },

     {
          title: "My Polls",
          href: "/app/polls",
          icon: Vote,
     },

     {
          title: "Create Poll",
          href: "/app/polls/create",
          icon: PlusSquare,
     },

     {
          title: "Analytics",
          href: "/app/analytics",
          icon: BarChart3,
     },
];
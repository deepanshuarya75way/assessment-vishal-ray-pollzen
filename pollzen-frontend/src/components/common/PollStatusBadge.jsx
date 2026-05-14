import { Badge } from "@/components/ui/badge";

export default function PollStatusBadge({
     status,
}) {
     const variants = {
          active:
               "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",

          published:
               "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",

          closed:
               "bg-red-500/20 text-red-400 border-red-500/30",
     };

     return (
          <Badge
               className={variants[status]}
          >
               {status}
          </Badge>
     );
}
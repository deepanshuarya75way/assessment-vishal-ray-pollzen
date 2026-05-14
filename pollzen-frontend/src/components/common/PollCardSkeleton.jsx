import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

export default function PollCardSkeleton() {
     return (
          <Card className="border-zinc-800 bg-zinc-900">
               <CardContent className="p-6 space-y-5">
                    <Skeleton className="h-6 w-40" />

                    <Skeleton className="h-4 w-full" />

                    <Skeleton className="h-4 w-3/4" />

                    <div className="flex justify-between">
                         <Skeleton className="h-6 w-20" />

                         <Skeleton className="h-6 w-24" />
                    </div>

                    <Skeleton className="h-10 w-full" />
               </CardContent>
          </Card>
     );
}
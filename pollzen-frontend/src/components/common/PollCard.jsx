import { MoreVertical, BarChart3, Trash2, Send, Lock,} from "lucide-react";

import { Link } from "react-router-dom";
import { toast } from "sonner";

import { publishPoll,closePoll,deletePoll} from "@/services/poll.service";
import PollStatusBadge from "./PollStatusBadge";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

export default function PollCard({poll, refetchPolls}) {
     const handlePublish = async () => {
          try {
               await publishPoll(poll._id);

               toast.success("Poll published");

               refetchPolls();
          } catch {
               toast.error( "Failed to publish poll" );
          }
     };

     const handleClose = async () => {
          try {
               await closePoll(poll._id);

               toast.success( "Poll closed" );

               refetchPolls();
          } catch {
               toast.error("Failed to close poll" );
          }
     };

     const handleDelete = async () => {
          try {
               await deletePoll(poll._id);

               toast.success("Poll deleted" );

               refetchPolls();
          } catch {
               toast.error( "Failed to delete poll" );
          }
     };

     return (
          <Card className="border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-colors">
               <CardContent className="p-6 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                         <div>
                              <h2 className="text-lg font-semibold">
                                   {poll.title}
                              </h2>

                              <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                                   {poll.description}
                              </p>
                         </div>

                         <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                   <Button
                                        size="icon"
                                        variant="ghost"
                                   >
                                        <MoreVertical
                                             size={18}
                                        />
                                   </Button>
                              </DropdownMenuTrigger>

                              <DropdownMenuContent align="end">
                                   <DropdownMenuItem
                                        onClick={handlePublish}
                                   >
                                        <Send size={16} />

                                        Publish
                                   </DropdownMenuItem>

                                   <DropdownMenuItem
                                        onClick={handleClose}
                                   >
                                        <Lock size={16} />

                                        Close
                                   </DropdownMenuItem>

                                   <DropdownMenuItem
                                        onClick={handleDelete}
                                        className="text-red-500"
                                   >
                                        <Trash2 size={16} />

                                        Delete
                                   </DropdownMenuItem>
                              </DropdownMenuContent>
                         </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between">
                         <PollStatusBadge
                              status={poll.status}
                         />

                         <div className="flex items-center gap-2 text-sm text-zinc-400">
                              <BarChart3 size={16} />

                              {poll.totalResponses || 0}
                              responses
                         </div>
                    </div>

                    <div className="flex items-center gap-3">
                         <Button
                              asChild
                              className="flex-1"
                         >
                              <Link
                                   to={`/app/polls/${poll._id}`}
                              >
                                   View Details
                              </Link>
                         </Button>

                         <Button
                              variant="secondary"
                              asChild
                         >
                              <Link
                                   to={`/app/analytics/${poll._id}`}
                              >
                                   Analytics
                              </Link>
                         </Button>
                    </div>
               </CardContent>
          </Card>
     );
}
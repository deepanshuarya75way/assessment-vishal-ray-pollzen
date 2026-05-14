import { useEffect } from "react";

import { toast } from "sonner";

import { socket } from "@/sockets/socket";

export default function usePollRealtime({
     pollId,
     onUpdate,
}) {
     useEffect(() => {
          if (!pollId) return;

          socket.connect();

          socket.emit(
               "join-poll",
               pollId
          );

          const handlePollUpdated =
               () => {
                    toast.success(
                         "Analytics updated"
                    );

                    onUpdate?.();
               };

          socket.on(
               "poll-updated",
               handlePollUpdated
          );

          return () => {
               socket.off(
                    "poll-updated",
                    handlePollUpdated
               );

               socket.disconnect();
          };
     }, [pollId, onUpdate]);
}
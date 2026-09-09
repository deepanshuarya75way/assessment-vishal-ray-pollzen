import { useEffect } from "react";

import { getCurrentUser } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { connectSocket, disconnectSocket } from "@/sockets/socket";

export default function useAuthInit() {
     const token = useAuthStore((state) => state.token );

     const setUser = useAuthStore((state) => state.setUser);

     const logout = useAuthStore( (state) => state.logout);

     useEffect(() => {
          const initializeAuth = async () => {
               try {
                    if (!token) return;

                    const response = await getCurrentUser();

                    setUser(response.data);
                                              // connect realtime socket after successful init
                                              try {
                                                   connectSocket();
                                              } catch (e) {
                                                   /* ignore socket errors during init */
                                              }
               } catch {
                    logout();
               }
          };

          initializeAuth();
     }, [token, setUser, logout]);

          // disconnect socket when token removed
          useEffect(() => {
               if (!token) {
                    try {
                         disconnectSocket();
                    } catch (e) {
                         // ignore
                    }
               }
          }, [token]);
}
import { useEffect } from "react";

import { getCurrentUser } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

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
               } catch {
                    logout();
               }
          };

          initializeAuth();
     }, [token, setUser, logout]);
}
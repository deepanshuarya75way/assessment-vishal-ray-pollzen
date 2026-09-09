import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export default function Providers({ children }) {
     return (
          <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem={false}
          >
               {children}

               <Toaster
                    richColors
                    position="top-right"
               />
          </ThemeProvider>
     );
}
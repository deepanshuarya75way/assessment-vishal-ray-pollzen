import { RouterProvider } from "react-router-dom";

import router from "./app/router";

import useAuthInit from "./hooks/useAuthInit";

export default function App() {
  useAuthInit();

  return <RouterProvider router={router} />;
}
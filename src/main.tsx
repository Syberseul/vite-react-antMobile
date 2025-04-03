import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);

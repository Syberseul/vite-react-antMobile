import { createBrowserRouter } from "react-router-dom";

import Home from "@/Pages/Home";
import Details from "@/Pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

export default router;

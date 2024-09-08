import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
    <RouterProvider router={routes} />
);

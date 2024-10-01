import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
    <Provider store={store}> 
        <RouterProvider router={routes} />
    </Provider>
);

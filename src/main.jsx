import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/Home";
import Result from "./Pages/Result";
import Quiz from "./Pages/Quiz";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LeadDetails } from "./Pages/leadDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/details",
    element: <LeadDetails />,
  },
  {
    path: "/result/:name/:user",
    element: <Result />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

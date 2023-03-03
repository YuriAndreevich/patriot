import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Annotation from "./components/Annotation";
import NewGeneration from "./components/Patriot/newGeneration";
import Page1 from "./components/Patriot/pages/page1";
import Page2 from "./components/Patriot/pages/page2";
import Page3 from "./components/Patriot/pages/page3";
import Page4 from "./components/Patriot/pages/page4";
import Page5 from "./components/Patriot/pages/page5";
import Page6 from "./components/Patriot/pages/page6";
import Page7 from "./components/Patriot/pages/page7";
import Genocide from "./components/genocide/Genocide";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/annotation",
    element: <Annotation />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newGeneration",
    element: <NewGeneration />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
  {
    path: "/page4",
    element: <Page4 />,
  },
  {
    path: "/page5",
    element: <Page5 />,
  },
  {
    path: "/page6",
    element: <Page6 />,
  },
  {
    path: "/page7",
    element: <Page7 />,
  },
  {
    path: "/genocide",
    element: <Genocide />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

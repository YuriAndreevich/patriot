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
import PhotoMuseum from "./components/PhotoMuseum";
import Map from "./components/map";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/annotation",
    element: (
      <Layout>
        <Annotation />
      </Layout>
    ),
  },
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/newGeneration",

    element: (
      <Layout>
        <NewGeneration />
      </Layout>
    ),
  },
  {
    path: "/page1",
    element: (
      <Layout>
        <Page1 />
      </Layout>
    ),
  },
  {
    path: "/page2",
    element: (
      <Layout>
        <Page2 />
      </Layout>
    ),
  },
  {
    path: "/page3",
    element: (
      <Layout>
        <Page3 />
      </Layout>
    ),
  },
  {
    path: "/page4",
    element: (
      <Layout>
        <Page4 />
      </Layout>
    ),
  },
  {
    path: "/page5",
    element: (
      <Layout>
        <Page5 />
      </Layout>
    ),
  },
  {
    path: "/page6",
    element: (
      <Layout>
        <Page6 />
      </Layout>
    ),
  },
  {
    path: "/page7",
    element: (
      <Layout>
        <Page7 />
      </Layout>
    ),
  },
  {
    path: "/photomuseum",
    element: (
      <Layout>
        {" "}
        <PhotoMuseum />
      </Layout>
    ),
  },
  {
    path: "/map",
    element: (
      <Layout>
        <Map />
      </Layout>
    ),
  },
  {
    path: "/genocide",
    element: (
      <Layout>
        <Genocide />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

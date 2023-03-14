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
import Weekend from "./components/weekend";
import Games from "./components/games";
import { MainPage } from "./components/News/MainPage";
import Map from "./components/map";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./layout";
import MemoryGame from "./components/games/MemoryGame";
import Quiz from "./components/games/quiz";
import { RegisterPage } from "./components/News/RegisterPage";
import { LoginPage } from "./components/News/LoginPage";
import { AddPostPage } from "./components/News/AddPostPage";
import { PostPage } from "./components/News/PostPage";
import { EditPostPage } from "./components/News/EditPostPage";
import AdminPanel from "./components/AdminPanel";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/annotation",
    element: <Annotation />,
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
  {
    path: "/games",
    element: (
      <Layout>
        <Games />
      </Layout>
    ),
  },
  {
    path: "/games/memorygame",
    element: (
      <Layout>
        <MemoryGame />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <RegisterPage />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
  {
    path: "/games/quiz",
    element: (
      <Layout>
        <Quiz />
      </Layout>
    ),
  },
  {
    path: "/news",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/news/:id",
    element: (
      <Layout>
        <PostPage />
      </Layout>
    ),
  },
  {
    path: "/news/:id/edit",
    element: (
      <Layout>
        <EditPostPage />
      </Layout>
    ),
  },
  {
    path: "/newpost",
    element: (
      <Layout>
        <AddPostPage />
      </Layout>
    ),
  },
  {
    path: "/weekend",
    element: (
      <Layout>
        <Weekend />
      </Layout>
    ),
  },
  {
    path: "/admin",
    element: (
      <Layout>
        <AdminPanel />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ChakraProvider>
  </Provider>
);

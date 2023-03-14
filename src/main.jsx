import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);

// const router = createBrowserRouter([
//   {
//     path: "/annotation",
//     element: <Annotation />,
//   },
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <App />
//       </Layout>
//     ),
//     errorElement: <ErrorPage />,
//   },

//   {
//     path: "/newGeneration",

//     element: (
//       <Layout>
//         <NewGeneration />
//       </Layout>
//     ),
//   },
//   {
//     path: "/page1",
//     element: (
//       <Layout>
//         <Page1 />
//       </Layout>
//     ),
//   },
//   {
//     path: "/page2",
//     element: (
//       <Layout>
//         <Page2 />
//       </Layout>
//     ),
//   },
//   {
//     path: "/page3",
//     element: (
//       <Layout>
//         <Page3 />
//       </Layout>
//     ),
//   },
//   {
//     path: "/page4",
//     element: (
//       <Layout>
//         <Page4 />
//       </Layout>
//     ),
//   },
//   {
//     path: "/page5",
//     element: (
//       <Layout>
//         <Page5 />
//       </Layout>
//     ),
//   },
//   {
//     path: "/page6",
//     element: (
//       <Layout>
//         <Page6 />
//       </Layout>
//     ),
//   },
//   {
//     path: "/page7",
//     element: (
//       <Layout>
//         <Page7 />
//       </Layout>
//     ),
//   },
//   {
//     path: "/photomuseum",
//     element: (
//       <Layout>
//         <PhotoMuseum />
//       </Layout>
//     ),
//   },
//   {
//     path: "/map",
//     element: (
//       <Layout>
//         <Map />
//       </Layout>
//     ),
//   },
//   {
//     path: "/genocide",
//     element: (
//       <Layout>
//         <Genocide />
//       </Layout>
//     ),
//   },
//   {
//     path: "/games",
//     element: (
//       <Layout>
//         <Games />
//       </Layout>
//     ),
//   },
//   {
//     path: "/games/memorygame",
//     element: (
//       <Layout>
//         <MemoryGame />
//       </Layout>
//     ),
//   },
//   {
//     path: "/register",
//     element: (
//       <Layout>
//         <RegisterPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <Layout>
//         <LoginPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/games/quiz",
//     element: (
//       <Layout>
//         <Quiz />
//       </Layout>
//     ),
//   },
//   {
//     path: "/news",
//     element: (
//       <Layout>
//         <MainPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/news/:id",
//     element: (
//       <Layout>
//         <PostPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/news/:id/edit",
//     element: (
//       <Layout>
//         <EditPostPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/newpost",
//     element: (
//       <Layout>
//         <AddPostPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/weekend",
//     element: (
//       <Layout>
//         <Weekend />
//       </Layout>
//     ),
//   },
//   {
//     path: "/admin",
//     element: (
//       <Layout>
//         <AdminPanel />
//       </Layout>
//     ),
//   },
// ]);

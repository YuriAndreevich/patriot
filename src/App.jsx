import React, { useEffect } from "react";
import { getMe } from "./redux/features/auth/authSlice.js";
import { useDispatch } from "react-redux";
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";

import Annotation from "./components/Annotation";
import Main from "./components/Patriot";
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
import ErrorPage from "./components/ErrorPage";
import MemoryGame from "./components/games/MemoryGame";
import Quiz from "./components/games/quiz";
import { RegisterPage } from "./components/News/RegisterPage";
import { LoginPage } from "./components/News/LoginPage";
import { AddPostPage } from "./components/News/AddPostPage";
import { PostPage } from "./components/News/PostPage";
import { EditPostPage } from "./components/News/EditPostPage";
import { PostsPage } from "./components/News/PostsPage";
import AdminPanel from "./components/AdminPanel";

import Patriot from "./components/Patriot";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<MainPage />} />
        <Route path="/genocide" element={<Genocide />} />
        <Route path="/map" element={<Map />} />
        <Route path="/weekend" element={<Weekend />} />
        <Route path="/photomuseum" element={<PhotoMuseum />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/memorygame" element={<MemoryGame />} />
        <Route path="/games/quiz" element={<Quiz />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/newpost" element={<AddPostPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/newGeneration" element={<NewGeneration />} />
        <Route path="/p1" element={<Page1 />} />
        <Route path="/p2" element={<Page2 />} />
        <Route path="/p3" element={<Page3 />} />
        <Route path="/p4" element={<Page4 />} />
        <Route path="/p5" element={<Page5 />} />
        <Route path="/p6" element={<Page6 />} />
        <Route path="/p7" element={<Page7 />} />

        <Route path="/news/posts" element={<PostsPage />} />
        <Route path="/news/:id" element={<PostPage />} />
        <Route path="/news/:id/edit" element={<EditPostPage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

// БРЕЙНШТОРМ «ГОД МИРА И СОЗИДАНИЯ:
// ТВОЯ ИДЕЯ!? ТВОЕ УЧАСТИЕ!? ТВОЙ ВЫБОР!?»

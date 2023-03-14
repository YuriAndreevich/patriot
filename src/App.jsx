import React, { useEffect } from "react";
import { getMe } from "./redux/features/auth/authSlice.js";
import { useDispatch } from "react-redux";
import Layout from "./layout";

import Patriot from "./components/Patriot";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <div className="App">
        <Patriot />
      </div>
    </Layout>
  );
}

export default App;

// БРЕЙНШТОРМ «ГОД МИРА И СОЗИДАНИЯ:
// ТВОЯ ИДЕЯ!? ТВОЕ УЧАСТИЕ!? ТВОЙ ВЫБОР!?»

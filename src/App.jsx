import React, { useEffect } from "react";
import { getMe } from "./redux/features/auth/authSlice.js";
import { useDispatch } from "react-redux";

import Patriot from "./components/Patriot";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <div className="App">
      <Patriot />

      {/* <Video
        src="https://drive.google.com/file/d/12_kr4AJBt4oA9jT3CSm2dJD5eApv9TxF/preview"
      /> */}
    </div>
  );
}

export default App;

// БРЕЙНШТОРМ «ГОД МИРА И СОЗИДАНИЯ:
// ТВОЯ ИДЕЯ!? ТВОЕ УЧАСТИЕ!? ТВОЙ ВЫБОР!?»

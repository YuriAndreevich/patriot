import React, { useEffect } from "react";

import Patriot from "./components/Patriot";

function App() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   const scriptTwo = document.createElement("script");
  //   script.src = "src/script/jquery.js";
  //   scriptTwo.src = "src/script/uhpv-full.min.js";
  //   document.body.appendChild(script);
  //   document.body.appendChild(scriptTwo);
  // }, []);
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

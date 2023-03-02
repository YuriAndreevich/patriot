import "./App.css";
import { useEffect } from "react";
import AnimatedNumber from "./components/AnimatedNumber";
import Patriot from "./components/Patriot";

function App() {
  // useEffect(() => {
  //   // const element = document.getElementsByClassName("avtor");
  //   setTimeout(() => {
  //     const element = document.getElementByClassName("avtor");
  //     element.className += " newClass";
  //   }, 1000);
  //   console.log(element);
  //   // element.parentNode.removeChild(div);
  //   // element.remove(); // Removes the div with the 'div-02' id
  // }, [element]);
  return (
    <div className="App">
      <Patriot />
      <AnimatedNumber />
    </div>
  );
}

export default App;

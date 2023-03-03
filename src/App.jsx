import "./App.css";
import Patriot from "./components/Patriot";

import Navbar from "./components/navbar";

import RightMenu from "./components/RightMenu";
import AnimatedNumber from "./components/AnimatedNumber";
import TimeLine from "./components/TimeLine";
import BelarusMap from "./components/BelarusMap";

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
      {/* <Navbar /> */}
      {/* <RightMenu /> */}
      <Patriot />
      {/* <BelarusMap /> */}
      {/* <TimeLine /> */}
      {/* <AnimatedNumber /> */}
    </div>
  );
}

export default App;

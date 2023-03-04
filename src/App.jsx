import Patriot from "./components/Patriot";

import Navbar from "./components/navbar/navbar";

import RightMenu from "./components/RightMenu";
import AnimatedNumber from "./components/AnimatedNumber";
import TimeLine from "./components/TimeLine";
import BelarusMap from "./components/BelarusMap";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <RightMenu /> */}
      <Patriot />
      {/* <BelarusMap /> */}
      {/* <TimeLine /> */}
      <AnimatedNumber text="Молодежные проекты" number={2412} />
      <AnimatedNumber text="Молодежные проекты" number={242} />
      <AnimatedNumber text="Молодежные проекты" number={1502} />
    </div>
  );
}

export default App;

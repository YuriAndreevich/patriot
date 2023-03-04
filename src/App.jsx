import Patriot from "./components/Patriot";

import Navbar from "./components/navbar";

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
      <div className="flex justify-center gap-10 p-10">
        <AnimatedNumber text="Молодежные проекты" number={2412} />
        <AnimatedNumber text="Молодежные проекты" number={242} />
        <AnimatedNumber text="Молодежные проекты" number={1502} />
      </div>
    </div>
  );
}

export default App;

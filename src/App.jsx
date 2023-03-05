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
        <AnimatedNumber text="Мероприятий проведено" number={25} />
        <AnimatedNumber text="Личных достижений" number={242} />
        <AnimatedNumber text="Молодежные проекты" number={32} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import useWindowSize from "./hooks/useWindowSize";
import MNav from "./components/MobileNavigation";

function layout({ children }) {
  const screen = useWindowSize();

  return (
    <>
      {screen.width > 1544 ? (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <MNav />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}

export default layout;

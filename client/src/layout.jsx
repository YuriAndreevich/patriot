import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default layout;

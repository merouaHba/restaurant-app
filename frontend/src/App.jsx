/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

import { Footer, Header } from "./components";
import { AnimatePresence } from "framer-motion";
import { Outlet, useHref, useLocation, useNavigation } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence mode="wait">
      <div className=" h-auto flex flex-col bg-bg ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;

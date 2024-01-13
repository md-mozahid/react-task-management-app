import HeroSection from "./pages/HeroSection";
import TaskContents from "./pages/TaskContents";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TaskContents />
      <Footer />
    </>
  );
}

export default App;

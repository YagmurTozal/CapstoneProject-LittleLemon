import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className=" text-gray-400 ">
      <Navbar />
      <About/>
      <Specials/>
      <Testimonials/>
      <Info/>
      <Footer/>
    </main>
  );
}

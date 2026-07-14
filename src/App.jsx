// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0d12]">
      <Navbar />

      <main>
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
export default App;
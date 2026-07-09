// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0d12]">
      <Navbar />
      
      <main>
        <Contact />
      </main>
      
      {/* Se eliminó el <Footer /> de aquí para que no rompa la app */}
    </div>
  );
}

export default App;
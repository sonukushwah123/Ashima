import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/Style/style.css";
import Header from "./Components/Header";
import Home from "./Pages/HomeFolder/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Clints from "./Pages/Clints";
import Contact from "./Pages/Contact";

import Inspection from "./Pages/Inspection";
import Job from "./Pages/Job";
import La from "./Pages/La";

import Sector from "./Pages/Sector";

import Loader from "./Pages/Loader";
import Form from "./Pages/Form";
import BrochurePage from "./Pages/BrochurePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Loader />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clints" element={<Clints />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/inspection/:id" element={<Inspection />} />
        <Route path="/job" element={<Job />} />
        <Route path="/la/:id" element={<La />} />

        <Route path="/sector/:id" element={<Sector />} />
        <Route path="/brochurepage" element={<BrochurePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

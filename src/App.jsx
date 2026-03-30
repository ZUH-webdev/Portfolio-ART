import React from "react";
import Myprocess from "./pages/Myprocess";
import Testimonials from "./pages/Testimonials";
import Cta from "./pages/Cta";
import Footer from "./components/Footer";
import FeaturedWork from "./pages/Featuredwork";
const App = () => {
  return (
    <>
    <FeaturedWork />
    <Myprocess />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default App;

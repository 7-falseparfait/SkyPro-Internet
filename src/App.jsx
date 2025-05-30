import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Partners } from "./Partners";
import { Testimonials } from "./Testimonials";
import { GetStarted } from "./GetStarted";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Partners />
            <Testimonials />
            <GetStarted />
          </>
        } />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
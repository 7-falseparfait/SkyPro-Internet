import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./pages/Hero";
import { Pricing } from "./pages/Pricing";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Partners } from "./components/Partners";
import { Testimonials } from "./components/Testimonials";
import { GetStarted } from "./components/GetStarted";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Partners />
              <Testimonials />
              <GetStarted />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              {" "}
              <Pricing />
              <GetStarted />{" "}
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

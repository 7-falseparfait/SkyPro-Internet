import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './pages/Hero';
import { Pricing } from './pages/Pricing';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { GetStarted } from './components/GetStarted';
import { Serve } from './components/Serve';
import { Faqs } from './components/Faqs';

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
              <Serve />
              <Testimonials />
              <Faqs />
              <Partners />
              <GetStarted />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              {' '}
              <Pricing />
              <GetStarted />{' '}
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

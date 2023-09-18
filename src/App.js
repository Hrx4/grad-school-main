import React from 'react';

// import './App.css';
import './style.css';
import Banner from "./MyComponent/Banner";
import About from "./MyComponent/About";
import Footer from "./MyComponent/Footer";
import Header from "./MyComponent/Header";
import Offer from "./MyComponent/Offer";
import Courses from "./MyComponent/Courses";
import Presentation from './MyComponent/Presentation';
import Contact from './MyComponent/Contact';


import './assets/css/flex-slider.css';
import './assets/css/fontawesome.css';
import './assets/css/lightbox.css';
import './assets/css/owl.css';
import './assets/css/templatemo-grad-school.css';
import '../src/vendor/bootstrap/css/bootstrap.min.css';
import TestiMonials from './MyComponent/Testimonials/Testimonials';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Offer />
      <Courses />
      <Presentation />
      <TestiMonials/>
      <Contact />
      <Footer />
    </>

  );
}

export default App;

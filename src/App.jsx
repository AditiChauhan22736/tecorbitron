import React from "react";
import ScrollContainer from "./components/ScrollContainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";
import Presence from "./components/Presence";
import Mission from "./components/Mission";
import Testimonial from "./components/Testimonial";
import TrustedPartners from "./components/TrustedPartners";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQsComponent from "./components/FAQsComponent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ScrollContainer>
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Stats />
      <Presence />
      <Mission />
      <Testimonial />
      <TrustedPartners />
      <WhyChooseUs />
      <FAQsComponent />
      <Footer />
    </ScrollContainer>
  );
};

export default App;
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Location from './components/Location';
import Approvals from './components/Approvals';
import WhyChooseUs from './components/WhyChooseUs';
import CommercialUnits from './components/CommercialUnits';
import Brands from './components/Brands';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Location />
      <Approvals />
      <WhyChooseUs />
      <CommercialUnits />
      <Brands />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;
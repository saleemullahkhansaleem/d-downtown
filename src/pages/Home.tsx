import Hero from "../components/Hero";
import Location from "../components/Location";
import Approvals from "../components/Approvals";
import WhyChooseUs from "../components/WhyChooseUs";
import CommercialUnits from "../components/CommercialUnits";
import Brands from "../components/Brands";
import BookingSection from "../components/BookingSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Location />
      <Approvals />
      <WhyChooseUs />
      <CommercialUnits />
      <Brands />
      <BookingSection />
    </div>
  );
};

export default Home;

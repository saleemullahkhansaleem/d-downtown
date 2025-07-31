import {
  Hero,
  Location,
  Approvals,
  WhyChooseUs,
  CommercialUnits,
  Brands,
  BookingSection,
} from "../components";

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

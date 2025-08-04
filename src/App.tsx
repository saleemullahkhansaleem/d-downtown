import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header, Footer } from "./components";
import { FloatingContact } from "./components/common";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import UnitTypes from "./pages/UnitTypes";
import Amenities from "./pages/Amenities";
import PropertyLayout from "./pages/PropertyLayout";
import ThreeDModel from "./pages/ThreeDModel";
import InvestmentModels from "./pages/InvestmentModels";
import PaymentPricing from "./pages/PaymentPricing";
import CommercialServices from "./pages/CommercialServices";
import LocationConnectivity from "./pages/LocationConnectivity";
import OurTeam from "./pages/OurTeam";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import DroneShoots from "./pages/DroneShoots";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header />
          <main className="pt-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/unit-types" element={<UnitTypes />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/property-layout" element={<PropertyLayout />} />
              <Route path="/3d-model" element={<ThreeDModel />} />
              <Route path="/investment-models" element={<InvestmentModels />} />
              <Route path="/payment-pricing" element={<PaymentPricing />} />
              <Route
                path="/commercial-services"
                element={<CommercialServices />}
              />
              <Route
                path="/location-connectivity"
                element={<LocationConnectivity />}
              />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/drone-shoots" element={<DroneShoots />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingContact />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

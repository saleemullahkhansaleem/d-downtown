import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProjectPortfolio from "./pages/ProjectPortfolio";
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

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/project-portfolio" element={<ProjectPortfolio />} />
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
      </div>
    </Router>
  );
}

export default App;

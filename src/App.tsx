import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopNavigation from "@/components/ScrollToTopNavigation";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Gallery from "./pages/Gallery";
import InstallationRequest from "./pages/InstallationRequest";
import Consultation from "./pages/Consultation";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HowItWorks from "./pages/HowItWorks";
import WhySolar from "./pages/WhySolar";
import NotFound from "./pages/NotFound";

// Service Pages
import Installation from "./pages/services/Installation";
import Consultancy from "./pages/services/Consultancy";
import Subsidy from "./pages/services/Subsidy";
import Franchise from "./pages/services/Franchise";
import Training from "./pages/services/Training";
import Maintenance from "./pages/services/Maintenance";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LanguageSelectorModal />
        <BrowserRouter>
          <ScrollToTopNavigation />
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Product />} />
            <Route path="/services/installation" element={<Installation />} />
            <Route path="/services/consultancy" element={<Consultancy />} />
            <Route path="/services/subsidy" element={<Subsidy />} />
            <Route path="/services/franchise" element={<Franchise />} />
            <Route path="/services/training" element={<Training />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-solar" element={<WhySolar />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/installation" element={<InstallationRequest />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<ContactUs />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

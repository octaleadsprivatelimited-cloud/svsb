import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import OurImpact from "./pages/OurImpact";
import Volunteer from "./pages/Volunteer";
import Programs from "./pages/Programs";
import EducationPrograms from "./pages/EducationPrograms";
import HealthCamps from "./pages/HealthCamps";
import WomenEmpowerment from "./pages/WomenEmpowerment";
import YouthDevelopment from "./pages/YouthDevelopment";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import FounderMessage from "./pages/FounderMessage";
import BoardOfTrustees from "./pages/BoardOfTrustees";
import AnnualReports from "./pages/AnnualReports";
import Awards from "./pages/Awards";
import Events from "./pages/Events";
import Testimonials from "./pages/Testimonials";
import CSRPartnerships from "./pages/CSRPartnerships";
import Transparency from "./pages/Transparency";
import MediaPress from "./pages/MediaPress";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<About />} />
          <Route path="/vision-mission" element={<About />} />
          <Route path="/founder-message" element={<FounderMessage />} />
          <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/education-programs" element={<EducationPrograms />} />
          <Route path="/rural-education" element={<EducationPrograms />} />
          <Route path="/health-camps" element={<HealthCamps />} />
          <Route path="/women-empowerment" element={<WomenEmpowerment />} />
          <Route path="/youth-development" element={<YouthDevelopment />} />
          <Route path="/sustainable-development" element={<YouthDevelopment />} />
          <Route path="/community-outreach" element={<OurImpact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/how-to-donate" element={<Donate />} />
          <Route path="/csr-partnerships" element={<CSRPartnerships />} />
          <Route path="/government-projects" element={<OurImpact />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/media-press" element={<MediaPress />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/annual-reports" element={<AnnualReports />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

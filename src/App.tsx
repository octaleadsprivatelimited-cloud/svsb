import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import Index from "./pages/Index";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import OurImpact from "./pages/OurImpact";
import Volunteer from "./pages/Volunteer";
import Programs from "./pages/Programs";
import EducationPrograms from "./pages/EducationPrograms";
import HealthCamps from "./pages/HealthCamps";
import YouthDevelopment from "./pages/YouthDevelopment";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import FounderMessage from "./pages/FounderMessage";
import BoardOfTrustees from "./pages/BoardOfTrustees";
import Awards from "./pages/Awards";
import Testimonials from "./pages/Testimonials";
import CSRPartnerships from "./pages/CSRPartnerships";
import Transparency from "./pages/Transparency";
import MediaPress from "./pages/MediaPress";
import NotFound from "./pages/NotFound";
import HealthCampKalwakurthy from "./pages/articles/HealthCampKalwakurthy";
import TreePlantationNagarkurnool from "./pages/articles/TreePlantationNagarkurnool";
import NashaMuktYuva from "./pages/articles/NashaMuktYuva";
import OrganDonationAwareness from "./pages/articles/OrganDonationAwareness";
import YouthDevelopmentWorkshop from "./pages/articles/YouthDevelopmentWorkshop";
import HealthCampRemoteAreas from "./pages/articles/HealthCampRemoteAreas";
import TwelveYearsService from "./pages/articles/TwelveYearsService";
import ServingSocietySince13 from "./pages/articles/ServingSocietySince13";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
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
            <Route path="/health-camps" element={<HealthCamps />} />
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
            <Route path="/articles/health-camp-kalwakurthy" element={<HealthCampKalwakurthy />} />
            <Route path="/articles/tree-plantation-nagarkurnool" element={<TreePlantationNagarkurnool />} />
            <Route path="/articles/nasha-mukt-yuva" element={<NashaMuktYuva />} />
            <Route path="/articles/organ-donation-awareness" element={<OrganDonationAwareness />} />
            <Route path="/articles/youth-development-workshop" element={<YouthDevelopmentWorkshop />} />
            <Route path="/articles/health-camp-remote-areas" element={<HealthCampRemoteAreas />} />
            <Route path="/articles/twelve-years-service" element={<TwelveYearsService />} />
            <Route path="/articles/serving-society-since-13" element={<ServingSocietySince13 />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
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
  </ErrorBoundary>
);

export default App;

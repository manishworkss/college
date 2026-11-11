import React from "react";
import { SiteConfigProvider } from "./context/SiteConfigContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { InstitutionsSection } from "./components/InstitutionsSection";
import { CoursesSection } from "./components/CoursesSection";
import { AboutSection } from "./components/AboutSection";
import { FacilitiesSection } from "./components/FacilitiesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AdmissionSection } from "./components/AdmissionSection";
import { GallerySection } from "./components/GallerySection";
import { ContactFooterSection } from "./components/ContactFooterSection";
import { FloatingConnect } from "./components/FloatingConnect";
import { ConfigDrawer } from "./components/ConfigDrawer";

export const App: React.FC = () => {
  return (
    <SiteConfigProvider>
      <div className="min-h-screen flex flex-col bg-surface text-slate-900 overflow-x-clip">
        <Header />
        <main className="flex-1 min-w-0">
          <HeroSection />
          <InstitutionsSection />
          <CoursesSection />
          <AboutSection />
          <FacilitiesSection />
          <TestimonialsSection />
          <AdmissionSection />
          <GallerySection />
          <ContactFooterSection />
        </main>
        <FloatingConnect />
        <ConfigDrawer />
      </div>
    </SiteConfigProvider>
  );
};

export default App;

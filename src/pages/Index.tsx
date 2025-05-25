
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StudentsSection } from "@/components/StudentsSection";
import { TeachersSection } from "@/components/TeachersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StudentsSection />
      <TeachersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

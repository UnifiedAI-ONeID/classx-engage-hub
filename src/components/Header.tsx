
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "@/contexts/TranslationContext";
import { GraduationCap } from "lucide-react";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">SmartClassX</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.features')}</a>
          <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.pricing')}</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.contact')}</a>
          <LanguageSelector />
          <ThemeToggle />
          <Button variant="outline" className="dark:border-gray-600">{t('nav.login')}</Button>
          <Button>{t('nav.getStarted')}</Button>
        </nav>
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

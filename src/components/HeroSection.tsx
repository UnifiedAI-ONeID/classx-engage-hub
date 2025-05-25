
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/contexts/TranslationContext";
import { Zap, Video } from "lucide-react";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700">
          {t('hero.badge')}
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            {t('hero.startTrial')}
            <Zap className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 dark:border-gray-600">
            {t('hero.watchDemo')}
            <Video className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

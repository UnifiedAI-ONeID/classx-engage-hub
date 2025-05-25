
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            {t('cta.startTrial')}
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
            {t('cta.scheduleDemo')}
          </Button>
        </div>
      </div>
    </section>
  );
};

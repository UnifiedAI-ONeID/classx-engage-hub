
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";
import { 
  BookOpen, 
  BarChart3, 
  Video, 
  MessageSquare, 
  Trophy,
  Shield
} from "lucide-react";

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: BookOpen,
      titleKey: 'features.interactive.title',
      descKey: 'features.interactive.desc',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: BarChart3,
      titleKey: 'features.analytics.title',
      descKey: 'features.analytics.desc',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Video,
      titleKey: 'features.virtual.title',
      descKey: 'features.virtual.desc',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: MessageSquare,
      titleKey: 'features.communication.title',
      descKey: 'features.communication.desc',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Trophy,
      titleKey: 'features.gamification.title',
      descKey: 'features.gamification.desc',
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: Shield,
      titleKey: 'features.security.title',
      descKey: 'features.security.desc',
      color: 'text-red-600 dark:text-red-400'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('features.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('features.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardHeader>
                  <Icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <CardTitle className="dark:text-white">{t(feature.titleKey)}</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    {t(feature.descKey)}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

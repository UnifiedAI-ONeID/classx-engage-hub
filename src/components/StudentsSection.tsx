
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/contexts/TranslationContext";
import { Users } from "lucide-react";

export const StudentsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700">
              {t('students.badge')}
            </Badge>
            <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('students.title')}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('students.desc')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                <span className="dark:text-gray-300">Adaptive learning algorithms</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                <span className="dark:text-gray-300">Collaborative study groups</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                <span className="dark:text-gray-300">Progress tracking and achievements</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 h-80 flex items-center justify-center">
            <Users className="h-32 w-32 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

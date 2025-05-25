
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/contexts/TranslationContext";
import { GraduationCap } from "lucide-react";

export const TeachersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl p-8 h-80 flex items-center justify-center order-last lg:order-first">
            <GraduationCap className="h-32 w-32 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <Badge className="mb-4 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700">
              {t('teachers.badge')}
            </Badge>
            <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('teachers.title')}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('teachers.desc')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                <span className="dark:text-gray-300">AI-powered content creation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                <span className="dark:text-gray-300">Automated grading and feedback</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                <span className="dark:text-gray-300">Comprehensive analytics dashboard</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

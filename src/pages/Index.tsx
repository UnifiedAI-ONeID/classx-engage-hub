import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "@/contexts/TranslationContext";
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Video, 
  MessageSquare, 
  Trophy,
  GraduationCap,
  Zap,
  Shield,
  Globe
} from "lucide-react";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('features.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('features.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle className="dark:text-white">{t('features.interactive.title')}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t('features.interactive.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                <CardTitle className="dark:text-white">{t('features.analytics.title')}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t('features.analytics.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <Video className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                <CardTitle className="dark:text-white">{t('features.virtual.title')}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t('features.virtual.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-orange-600 dark:text-orange-400 mb-4" />
                <CardTitle className="dark:text-white">{t('features.communication.title')}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t('features.communication.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <Trophy className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
                <CardTitle className="dark:text-white">{t('features.gamification.title')}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t('features.gamification.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 dark:text-red-400 mb-4" />
                <CardTitle className="dark:text-white">{t('features.security.title')}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t('features.security.desc')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* For Students Section */}
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

      {/* For Teachers Section */}
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">SmartClassX</span>
              </div>
              <p className="text-gray-400">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 SmartClassX. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Globe className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">{t('footer.available')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

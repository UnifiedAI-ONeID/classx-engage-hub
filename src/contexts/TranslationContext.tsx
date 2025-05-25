
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'pt' | 'ar';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: { code: Language; name: string; flag: string }[];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',
    'hero.badge': '🚀 Revolutionary LMS Platform',
    'hero.title': 'SmartClassX',
    'hero.subtitle': 'Revolutionizing education with AI-powered learning experiences that engage students and empower teachers like never before.',
    'hero.startTrial': 'Start Free Trial',
    'hero.watchDemo': 'Watch Demo',
    'features.title': 'Why Choose SmartClassX?',
    'features.subtitle': 'Powerful features designed for modern education',
    'features.interactive.title': 'Interactive Learning',
    'features.interactive.desc': 'Engage students with multimedia content, quizzes, and real-time collaboration tools.',
    'features.analytics.title': 'Analytics Dashboard',
    'features.analytics.desc': 'Track student progress with comprehensive analytics and personalized insights.',
    'features.virtual.title': 'Virtual Classrooms',
    'features.virtual.desc': 'Seamless video conferencing with interactive whiteboards and screen sharing.',
    'features.communication.title': 'Smart Communication',
    'features.communication.desc': 'AI-powered messaging and automated notifications keep everyone connected.',
    'features.gamification.title': 'Gamification',
    'features.gamification.desc': 'Boost engagement with achievements, leaderboards, and reward systems.',
    'features.security.title': 'Secure & Reliable',
    'features.security.desc': 'Enterprise-grade security with 99.9% uptime guarantee and data protection.',
    'students.badge': 'For Students',
    'students.title': 'Learn at Your Own Pace',
    'students.desc': 'Access personalized learning paths, interactive content, and real-time feedback to maximize your educational potential.',
    'teachers.badge': 'For Teachers',
    'teachers.title': 'Empower Your Teaching',
    'teachers.desc': 'Create engaging content, track student progress, and streamline administrative tasks with our comprehensive teaching tools.',
    'cta.title': 'Ready to Transform Education?',
    'cta.subtitle': 'Join thousands of educators and students who are already experiencing the future of learning with SmartClassX.',
    'cta.startTrial': 'Start Your Free Trial',
    'cta.scheduleDemo': 'Schedule a Demo',
    'footer.tagline': 'Revolutionizing education through technology and innovation.',
    'footer.available': 'Available worldwide'
  },
  es: {
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    'nav.getStarted': 'Comenzar',
    'hero.badge': '🚀 Plataforma LMS Revolucionaria',
    'hero.title': 'SmartClassX',
    'hero.subtitle': 'Revolucionando la educación con experiencias de aprendizaje impulsadas por IA que involucran a estudiantes y empoderan a profesores como nunca antes.',
    'hero.startTrial': 'Prueba Gratuita',
    'hero.watchDemo': 'Ver Demo',
    'features.title': '¿Por Qué Elegir SmartClassX?',
    'features.subtitle': 'Características poderosas diseñadas para la educación moderna',
    'features.interactive.title': 'Aprendizaje Interactivo',
    'features.interactive.desc': 'Involucra a los estudiantes con contenido multimedia, cuestionarios y herramientas de colaboración en tiempo real.',
    'features.analytics.title': 'Panel de Análisis',
    'features.analytics.desc': 'Rastrea el progreso de los estudiantes con análisis completos y perspectivas personalizadas.',
    'features.virtual.title': 'Aulas Virtuales',
    'features.virtual.desc': 'Videoconferencias fluidas con pizarras interactivas y compartir pantalla.',
    'features.communication.title': 'Comunicación Inteligente',
    'features.communication.desc': 'Mensajería impulsada por IA y notificaciones automatizadas mantienen a todos conectados.',
    'features.gamification.title': 'Gamificación',
    'features.gamification.desc': 'Aumenta la participación con logros, tablas de clasificación y sistemas de recompensas.',
    'features.security.title': 'Seguro y Confiable',
    'features.security.desc': 'Seguridad de nivel empresarial con garantía de tiempo de actividad del 99.9% y protección de datos.',
    'students.badge': 'Para Estudiantes',
    'students.title': 'Aprende a Tu Ritmo',
    'students.desc': 'Accede a rutas de aprendizaje personalizadas, contenido interactivo y retroalimentación en tiempo real para maximizar tu potencial educativo.',
    'teachers.badge': 'Para Profesores',
    'teachers.title': 'Potencia Tu Enseñanza',
    'teachers.desc': 'Crea contenido atractivo, rastrea el progreso de los estudiantes y optimiza las tareas administrativas con nuestras herramientas integrales de enseñanza.',
    'cta.title': '¿Listo para Transformar la Educación?',
    'cta.subtitle': 'Únete a miles de educadores y estudiantes que ya están experimentando el futuro del aprendizaje con SmartClassX.',
    'cta.startTrial': 'Comienza Tu Prueba Gratuita',
    'cta.scheduleDemo': 'Programar una Demo',
    'footer.tagline': 'Revolucionando la educación a través de la tecnología e innovación.',
    'footer.available': 'Disponible en todo el mundo'
  },
  fr: {
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.getStarted': 'Commencer',
    'hero.badge': '🚀 Plateforme LMS Révolutionnaire',
    'hero.title': 'SmartClassX',
    'hero.subtitle': 'Révolutionner l\'éducation avec des expériences d\'apprentissage alimentées par l\'IA qui engagent les étudiants et autonomisent les enseignants comme jamais auparavant.',
    'hero.startTrial': 'Essai Gratuit',
    'hero.watchDemo': 'Voir la Démo',
    'features.title': 'Pourquoi Choisir SmartClassX?',
    'features.subtitle': 'Fonctionnalités puissantes conçues pour l\'éducation moderne',
    'features.interactive.title': 'Apprentissage Interactif',
    'features.interactive.desc': 'Engagez les étudiants avec du contenu multimédia, des quiz et des outils de collaboration en temps réel.',
    'features.analytics.title': 'Tableau de Bord Analytique',
    'features.analytics.desc': 'Suivez les progrès des étudiants avec des analyses complètes et des aperçus personnalisés.',
    'features.virtual.title': 'Salles de Classe Virtuelles',
    'features.virtual.desc': 'Vidéoconférence fluide avec tableaux blancs interactifs et partage d\'écran.',
    'features.communication.title': 'Communication Intelligente',
    'features.communication.desc': 'Messagerie alimentée par l\'IA et notifications automatisées gardent tout le monde connecté.',
    'features.gamification.title': 'Gamification',
    'features.gamification.desc': 'Augmentez l\'engagement avec des réalisations, des classements et des systèmes de récompenses.',
    'features.security.title': 'Sécurisé et Fiable',
    'features.security.desc': 'Sécurité de niveau entreprise avec garantie de disponibilité de 99,9% et protection des données.',
    'students.badge': 'Pour les Étudiants',
    'students.title': 'Apprenez à Votre Rythme',
    'students.desc': 'Accédez à des parcours d\'apprentissage personnalisés, du contenu interactif et des commentaires en temps réel pour maximiser votre potentiel éducatif.',
    'teachers.badge': 'Pour les Enseignants',
    'teachers.title': 'Renforcez Votre Enseignement',
    'teachers.desc': 'Créez du contenu engageant, suivez les progrès des étudiants et rationalisez les tâches administratives avec nos outils d\'enseignement complets.',
    'cta.title': 'Prêt à Transformer l\'Éducation?',
    'cta.subtitle': 'Rejoignez des milliers d\'éducateurs et d\'étudiants qui expérimentent déjà l\'avenir de l\'apprentissage avec SmartClassX.',
    'cta.startTrial': 'Commencez Votre Essai Gratuit',
    'cta.scheduleDemo': 'Planifier une Démo',
    'footer.tagline': 'Révolutionner l\'éducation grâce à la technologie et à l\'innovation.',
    'footer.available': 'Disponible dans le monde entier'
  }
};

const availableLanguages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
  { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
  { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' }
];

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0] as Language;
  return translations[browserLang] ? browserLang : 'en';
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('smartclassx-language') as Language;
    return saved && translations[saved] ? saved : detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('smartclassx-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

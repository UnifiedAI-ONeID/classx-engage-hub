
import { useTranslation } from "@/contexts/TranslationContext";
import { GraduationCap, Globe } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();

  return (
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
  );
};

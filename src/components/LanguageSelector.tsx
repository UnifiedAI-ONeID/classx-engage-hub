
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

export const LanguageSelector = () => {
  const { language, setLanguage, availableLanguages } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-[140px] h-9 border-gray-300 dark:border-gray-600">
          <SelectValue>
            <div className="flex items-center space-x-2">
              <span>{availableLanguages.find(lang => lang.code === language)?.flag}</span>
              <span className="text-sm">{availableLanguages.find(lang => lang.code === language)?.name}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {availableLanguages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center space-x-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

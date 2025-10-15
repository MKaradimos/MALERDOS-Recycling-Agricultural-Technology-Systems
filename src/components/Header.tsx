import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section: string) => {
    if (section === 'home') {
      navigate('/');
    } else if (section === 'machinery') {
      navigate('/products?category=machinery');
    } else if (section === 'recycling') {
      navigate('/products?category=recycling');
    } else if (section === 'projects') {
      navigate('/projects');
    } else if (section === 'contact') {
      navigate('/contact');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MALERDOS
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('nav.home')}
          </button>
          <button 
            onClick={() => handleNavClick('machinery')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('nav.machinery')}
          </button>
          <button 
            onClick={() => handleNavClick('recycling')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('nav.recycling')}
          </button>
          <button 
            onClick={() => handleNavClick('projects')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('nav.projects')}
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('nav.contact')}
          </button>
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'en' ? 'el' : 'en')}
          className="gap-2"
        >
          <Globe className="h-4 w-4" />
          {language === 'en' ? 'EL' : 'EN'}
        </Button>
      </div>
    </header>
  );
};

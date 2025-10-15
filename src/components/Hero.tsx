import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate('/products?category=machinery');
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(205 85% 35% / 0.92), hsl(142 65% 45% / 0.88)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="gap-2" onClick={handleExploreProducts}>
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20" onClick={handleContactClick}>
              <Phone className="h-5 w-5" />
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

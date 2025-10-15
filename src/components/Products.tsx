import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import miniExcavatorImg from '@/assets/machinery/mini-excavator.jpg';
import mulcherImg from '@/assets/machinery/mulcher-light.jpg';
import glassBellImg from '@/assets/recycling/glass-bell.jpg';
import { useNavigate, Link } from 'react-router-dom';

export const Products = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Show only featured products
  const featuredProducts = [
    { ...products[0], image: miniExcavatorImg },
    { ...products[1], image: mulcherImg },
    { ...products[16], image: glassBellImg }, // Glass Recycling Bell
  ];

  const handleQuoteClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="recycling" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            {t('products.featured')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'en' 
              ? 'Our most popular equipment'
              : 'Ο πιο δημοφιλής εξοπλισμός μας'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col border-2 hover:border-primary/50 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={product.image}
                    alt={language === 'en' ? product.name : product.nameEl}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-background to-muted/10">
                <Badge className="mb-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300">
                  {language === 'en' ? product.subcategory : product.subcategoryEl}
                </Badge>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors duration-300 story-link">
                    {language === 'en' ? product.name : product.nameEl}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-6 flex-1 line-clamp-2">
                  {language === 'en' ? product.price : product.priceEl}
                </p>
                <Button 
                  className="w-full mt-auto gap-2 group-hover:shadow-lg transition-all duration-300" 
                  variant="default" 
                  onClick={handleQuoteClick}
                >
                  {t('products.quote')}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            size="lg" 
            onClick={() => navigate('/products?category=machinery')}
            className="gap-2 px-8 py-6 text-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
          >
            {t('products.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

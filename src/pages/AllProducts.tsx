import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getProductsByCategory, Product } from '@/data/products';
import { ArrowLeft } from 'lucide-react';

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const category = searchParams.get('category') as Product['category'] || 'machinery';
  
  const products = getProductsByCategory(category);

  const handleQuoteClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const categoryTitles = {
    machinery: { en: 'Agricultural Machinery', el: 'Γεωργικά Μηχανήματα' },
    recycling: { en: 'Recycling Systems', el: 'Συστήματα Ανακύκλωσης' },
    environmental: { en: 'Environmental Equipment', el: 'Περιβαλλοντικός Εξοπλισμός' },
  };

  const title = language === 'en' 
    ? categoryTitles[category].en 
    : categoryTitles[category].el;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
          </Button>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground">
              {language === 'en' 
                ? 'Browse our complete range of professional equipment'
                : 'Περιηγηθείτε στην πλήρη γκάμα επαγγελματικού εξοπλισμού μας'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center p-8">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={language === 'en' ? product.name : product.nameEl}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                        <span className="text-6xl opacity-20">
                          {category === 'machinery' ? '🚜' : category === 'recycling' ? '♻️' : '🌳'}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  {product.subcategory && (
                    <Badge className="mb-3">
                      {language === 'en' ? product.subcategory : product.subcategoryEl}
                    </Badge>
                  )}
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {language === 'en' ? product.name : product.nameEl}
                    </h3>
                  </Link>
                  {product.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {language === 'en' ? product.description : product.descriptionEl}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-primary mb-4 flex-1">
                    {language === 'en' ? product.price : product.priceEl}
                  </p>
                  <Button className="w-full mt-auto" variant="default" onClick={handleQuoteClick}>
                    {t('products.quote')}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProducts;

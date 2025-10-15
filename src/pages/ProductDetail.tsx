import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getProductById } from '@/data/products';
import { ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {language === 'en' ? 'Product Not Found' : 'Το Προϊόν Δεν Βρέθηκε'}
            </h1>
            <Button onClick={() => navigate('/')}>
              {language === 'en' ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleQuoteClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back' : 'Πίσω'}
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted p-12">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={language === 'en' ? product.name : product.nameEl}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                      <span className="text-9xl opacity-20">
                        {product.category === 'machinery' ? '🚜' : product.category === 'recycling' ? '♻️' : '🌳'}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            <div>
              {product.subcategory && (
                <Badge className="mb-4">
                  {language === 'en' ? product.subcategory : product.subcategoryEl}
                </Badge>
              )}
              <h1 className="text-4xl font-bold mb-4">
                {language === 'en' ? product.name : product.nameEl}
              </h1>
              {product.description && (
                <p className="text-lg text-muted-foreground mb-6">
                  {language === 'en' ? product.description : product.descriptionEl}
                </p>
              )}
              <p className="text-2xl text-primary font-semibold mb-8">
                {language === 'en' ? product.price : product.priceEl}
              </p>

              {/* Features Section */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'en' ? 'Key Features' : 'Κύρια Χαρακτηριστικά'}
                  </h2>
                  <ul className="space-y-2">
                    {(language === 'en' ? product.features : product.featuresEl || product.features).map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications Section */}
              {product.applications && product.applications.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'en' ? 'Applications' : 'Εφαρμογές'}
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(language === 'en' ? product.applications : product.applicationsEl || product.applications).map((app, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-muted-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.specs && product.specs.length > 0 && (
                <div className="space-y-6 mb-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Technical Specifications' : 'Τεχνικές Προδιαγραφές'}</h2>
                    <div className="space-y-3">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="flex justify-between py-2 border-b">
                          <span className="font-medium">
                            {language === 'en' ? spec.label : spec.labelEl}
                          </span>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Details Section */}
              {product.technicalDetails && (
                <div className="mb-8 p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">
                    {language === 'en' ? 'Technical Details' : 'Τεχνικές Λεπτομέρειες'}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === 'en' ? product.technicalDetails : product.technicalDetailsEl || product.technicalDetails}
                  </p>
                </div>
              )}

              <Button size="lg" className="w-full" onClick={handleQuoteClick}>
                {language === 'en' ? 'Request a Quote' : 'Ζητήστε Προσφορά'}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

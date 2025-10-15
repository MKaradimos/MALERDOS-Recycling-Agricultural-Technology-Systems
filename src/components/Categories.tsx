import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tractor, Recycle, Leaf, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Categories = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const categories = [
    {
      icon: Tractor,
      title: t('category.machinery'),
      description: t('category.machinery.desc'),
      color: 'from-primary to-primary/80',
      category: 'machinery',
    },
    {
      icon: Recycle,
      title: t('category.recycling'),
      description: t('category.recycling.desc'),
      color: 'from-secondary to-secondary/80',
      category: 'recycling',
    },
    {
      icon: Leaf,
      title: t('category.environmental'),
      description: t('category.environmental.desc'),
      color: 'from-accent to-accent/80',
      category: 'environmental',
    },
  ];

  return (
    <section id="machinery" className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 flex-shrink-0`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{category.description}</p>
                <Button
                  onClick={() => navigate(`/products?category=${category.category}`)}
                  variant="outline"
                  className="w-full gap-2"
                >
                  {t('products.viewAll')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { municipalProjects } from '@/data/municipalProjects';
import { Building2, Recycle, Dumbbell, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

const AllProjects = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const iconMap = {
    recycling: Recycle,
    gym: Dumbbell,
    playground: Building2,
    urban: Building2,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
          </Button>

          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {language === 'en' ? 'Municipal & Environmental Projects' : 'Δημοτικά & Περιβαλλοντικά Έργα'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Explore all our completed projects across Central Greece'
                : 'Εξερευνήστε όλα τα ολοκληρωμένα έργα μας σε όλη την Κεντρική Ελλάδα'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {municipalProjects.map((project, index) => {
              const Icon = iconMap[project.category];
              return (
                <Card 
                  key={project.id} 
                  className="p-6 hover:shadow-2xl transition-all duration-500 flex flex-col h-full group cursor-pointer border-2 hover:border-primary/50 animate-fade-in hover-scale"
                  onClick={() => navigate(`/project/${project.id}`)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <h3 className="font-bold story-link">
                          {language === 'en' ? project.municipalityEn : project.municipality}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {language === 'en' ? project.projectEn : project.project}
                      </p>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4 gap-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${project.id}`);
                    }}
                  >
                    {language === 'en' ? 'View Details' : 'Δείτε Λεπτομέρειες'}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;

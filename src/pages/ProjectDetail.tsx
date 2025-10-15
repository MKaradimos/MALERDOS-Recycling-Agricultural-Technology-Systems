import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getProjectById } from '@/data/municipalProjects';
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {language === 'en' ? 'Project Not Found' : 'Το Έργο Δεν Βρέθηκε'}
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate('/#projects')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back to Projects' : 'Πίσω στα Έργα'}
          </Button>

          <div className="mb-8">
            <Badge className="mb-4">{project.year}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'en' ? project.municipalityEn : project.municipality}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">
                {language === 'en' ? project.locationEn : project.location}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              {language === 'en' ? project.projectEn : project.project}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {language === 'en' ? project.descriptionEn : project.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Project Details Card */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">
                {language === 'en' ? 'Project Details' : 'Στοιχεία Έργου'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Installation Date' : 'Ημερομηνία Εγκατάστασης'}
                    </p>
                    <p className="font-semibold">{project.installationDate}</p>
                  </div>
                </div>
                {project.details.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">
                      {language === 'en' ? detail.labelEn : detail.label}
                    </span>
                    <span className="text-muted-foreground">{detail.value}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-600">
                    {language === 'en' ? 'Completed' : 'Ολοκληρωμένο'}
                  </span>
                </div>
              </div>
            </Card>

            {/* Equipment List Card */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">
                {language === 'en' ? 'Installed Equipment' : 'Εγκατεστημένος Εξοπλισμός'}
              </h3>
              <div className="space-y-4">
                {project.equipment.map((item, index) => (
                  <div key={index} className="flex justify-between items-start py-3 border-b last:border-0">
                    <div className="flex-1">
                      <p className="font-medium">
                        {language === 'en' ? item.nameEn : item.name}
                      </p>
                    </div>
                    <Badge variant="secondary">{item.quantity}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-center font-medium">
                  {language === 'en' 
                    ? `Total equipment installed: ${project.equipment.length} types`
                    : `Συνολικός εξοπλισμός: ${project.equipment.length} τύποι`}
                </p>
              </div>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'en' 
                  ? 'Interested in a similar project?' 
                  : 'Ενδιαφέρεστε για παρόμοιο έργο;'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en' 
                  ? 'Contact us for a customized solution for your municipality'
                  : 'Επικοινωνήστε μαζί μας για μια προσαρμοσμένη λύση για το Δήμο σας'}
              </p>
              <Button 
                size="lg"
                onClick={() => {
                  navigate('/#contact');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {language === 'en' ? 'Contact Us' : 'Επικοινωνήστε μαζί μας'}
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;

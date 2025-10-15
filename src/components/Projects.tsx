import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Recycle, Dumbbell, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Projects = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const municipalProjects = [
    {
      id: 'thebes-2024',
      municipality: 'Δήμος Θηβαίων',
      municipalityEn: 'Municipality of Thebes',
      project: 'Εγκατάσταση 150 κάδων ανακύκλωσης 240L & 360L, 20 κώδωνες γυαλιού',
      projectEn: 'Installation of 150 recycling bins 240L & 360L, 20 glass bells',
      year: '2024',
      icon: Recycle,
    },
    {
      id: 'livadeia-2023',
      municipality: 'Δήμος Λεβαδέων',
      municipalityEn: 'Municipality of Livadeia',
      project: 'Όργανα υπαίθριας γυμναστικής σε 5 πάρκα, παγκάκια και αστικός εξοπλισμός',
      projectEn: 'Outdoor gym equipment in 5 parks, benches and urban furniture',
      year: '2023',
      icon: Dumbbell,
    },
    {
      id: 'tanagra-2024',
      municipality: 'Δήμος Ταναγράς',
      municipalityEn: 'Municipality of Tanagra',
      project: 'Κώδωνες ανακύκλωσης γυαλιού - 25 σημεία, κάδοι 1100L',
      projectEn: 'Glass recycling bells - 25 locations, 1100L bins',
      year: '2024',
      icon: Recycle,
    },
    {
      id: 'orchomenos-2023',
      municipality: 'Δήμος Ορχομενού',
      municipalityEn: 'Municipality of Orchomenos',
      project: 'Εξοπλισμός παιδικών χαρών, κάδοι ανακύκλωσης 240L-360L, παγκάκια',
      projectEn: 'Playground equipment, recycling bins 240L-360L, benches',
      year: '2023',
      icon: Building2,
    },
    {
      id: 'distomo-2024',
      municipality: 'Δήμος Διστόμου-Αράχοβας-Αντίκυρας',
      municipalityEn: 'Municipality of Distomo-Arachova-Antikyra',
      project: 'Υπόγεια συστήματα απορριμμάτων σε 8 σημεία, κάδοι ανακύκλωσης',
      projectEn: 'Underground waste systems in 8 locations, recycling bins',
      year: '2024',
      icon: Recycle,
    },
    {
      id: 'aliartos-2023',
      municipality: 'Δήμος Αλιάρτου-Θεσπιέων',
      municipalityEn: 'Municipality of Aliartos-Thespies',
      project: 'Όργανα γυμναστικής σε 3 πάρκα, αστικός εξοπλισμός, κάδοι 1100L',
      projectEn: 'Gym equipment in 3 parks, urban furniture, 1100L bins',
      year: '2023',
      icon: Dumbbell,
    },
    {
      id: 'chaeronea-2024',
      municipality: 'Δήμος Χαιρώνειας',
      municipalityEn: 'Municipality of Chaeronea',
      project: 'Κάδοι ανακύκλωσης 240L & 360L - 80 τεμάχια, κώδωνες γυαλιού',
      projectEn: 'Recycling bins 240L & 360L - 80 units, glass bells',
      year: '2024',
      icon: Recycle,
    },
    {
      id: 'koroneia-2023',
      municipality: 'Δήμος Κορωνείας',
      municipalityEn: 'Municipality of Koroneia',
      project: 'Εξοπλισμός παιδικών χαρών, παγκάκια πάρκου, κάδοι ανακύκλωσης',
      projectEn: 'Playground equipment, park benches, recycling bins',
      year: '2023',
      icon: Building2,
    },
    {
      id: 'akraifnia-2024',
      municipality: 'Δήμος Ακραιφνίας',
      municipalityEn: 'Municipality of Akraifnia',
      project: 'Κώδωνες ανακύκλωσης γυαλιού - 15 σημεία, κάδοι 240L',
      projectEn: 'Glass recycling bells - 15 locations, 240L bins',
      year: '2024',
      icon: Recycle,
    },
    {
      id: 'dorida-2023',
      municipality: 'Δήμος Δωρίδος',
      municipalityEn: 'Municipality of Dorida',
      project: 'Υπόγεια συστήματα απορριμμάτων, κάδοι ανακύκλωσης 1100L',
      projectEn: 'Underground waste systems, 1100L recycling bins',
      year: '2023',
      icon: Recycle,
    },
    {
      id: 'parnassida-2024',
      municipality: 'Δήμος Παρνασσίδας',
      municipalityEn: 'Municipality of Parnassida',
      project: 'Όργανα υπαίθριας γυμναστικής, αστικός εξοπλισμός, παγκάκια',
      projectEn: 'Outdoor gym equipment, urban furniture, benches',
      year: '2024',
      icon: Dumbbell,
    },
    {
      id: 'delphi-2023',
      municipality: 'Δήμος Δελφών',
      municipalityEn: 'Municipality of Delphi',
      project: 'Κάδοι ανακύκλωσης 240L, 360L, 1100L - 120 τεμάχια συνολικά',
      projectEn: 'Recycling bins 240L, 360L, 1100L - 120 units total',
      year: '2023',
      icon: Recycle,
    },
  ];

  // Show only first 6 projects
  const featuredProjects = municipalProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id} 
                className="p-6 hover:shadow-2xl transition-all duration-500 flex flex-col h-full group cursor-pointer border-2 hover:border-primary/50 animate-fade-in hover-scale"
                onClick={() => navigate(`/project/${project.id}`)}
                style={{ animationDelay: `${index * 100}ms` }}
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
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">{project.year}</span>
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

        <div className="text-center animate-fade-in">
          <Button 
            size="lg"
            onClick={() => navigate('/projects')}
            className="gap-2 px-8 py-6 text-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
          >
            {language === 'en' ? 'View All Projects' : 'Δείτε Όλα τα Έργα'}
          </Button>
        </div>
      </div>
    </section>
  );
};

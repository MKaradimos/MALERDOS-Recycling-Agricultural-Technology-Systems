export interface MunicipalProject {
  id: string;
  municipality: string;
  municipalityEn: string;
  project: string;
  projectEn: string;
  year: string;
  category: 'recycling' | 'gym' | 'playground' | 'urban';
  details: {
    label: string;
    labelEn: string;
    value: string;
  }[];
  description: string;
  descriptionEn: string;
  equipment: {
    name: string;
    nameEn: string;
    quantity: string;
  }[];
  installationDate: string;
  location: string;
  locationEn: string;
}

export const municipalProjects: MunicipalProject[] = [
  {
    id: 'thebes-2024',
    municipality: 'Δήμος Θηβαίων',
    municipalityEn: 'Municipality of Thebes',
    project: 'Εγκατάσταση συστημάτων ανακύκλωσης',
    projectEn: 'Installation of recycling systems',
    year: '2024',
    category: 'recycling',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€45,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '2 μήνες / 2 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Ολοκληρωμένο έργο εγκατάστασης συστημάτων ανακύκλωσης σε όλο το Δήμο Θηβαίων. Περιλαμβάνει κάδους διαφόρων μεγεθών και κώδωνες γυαλιού σε στρατηγικά σημεία της πόλης.',
    descriptionEn: 'Complete recycling systems installation project throughout the Municipality of Thebes. Includes bins of various sizes and glass bells at strategic locations in the city.',
    equipment: [
      { name: 'Κάδοι ανακύκλωσης 240L', nameEn: 'Recycling bins 240L', quantity: '80 τεμ. / 80 units' },
      { name: 'Κάδοι ανακύκλωσης 360L', nameEn: 'Recycling bins 360L', quantity: '70 τεμ. / 70 units' },
      { name: 'Κώδωνες γυαλιού', nameEn: 'Glass bells', quantity: '20 τεμ. / 20 units' },
    ],
    installationDate: 'Μάρτιος 2024 / March 2024',
    location: 'Θήβα, Κεντρική Ελλάδα',
    locationEn: 'Thebes, Central Greece',
  },
  {
    id: 'livadeia-2023',
    municipality: 'Δήμος Λεβαδέων',
    municipalityEn: 'Municipality of Livadeia',
    project: 'Όργανα υπαίθριας γυμναστικής και αστικός εξοπλισμός',
    projectEn: 'Outdoor gym equipment and urban furniture',
    year: '2023',
    category: 'gym',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€38,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '3 μήνες / 3 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Εγκατάσταση πλήρους εξοπλισμού υπαίθριας γυμναστικής σε 5 δημοτικά πάρκα. Περιλαμβάνει όργανα για όλες τις ηλικίες και επίπεδα φυσικής κατάστασης.',
    descriptionEn: 'Installation of complete outdoor gym equipment in 5 municipal parks. Includes equipment for all ages and fitness levels.',
    equipment: [
      { name: 'Όργανα γυμναστικής', nameEn: 'Gym equipment', quantity: '25 τεμ. / 25 units' },
      { name: 'Παγκάκια πάρκου', nameEn: 'Park benches', quantity: '15 τεμ. / 15 units' },
      { name: 'Κάδοι απορριμμάτων', nameEn: 'Waste bins', quantity: '10 τεμ. / 10 units' },
    ],
    installationDate: 'Σεπτέμβριος 2023 / September 2023',
    location: 'Λιβαδειά, Βοιωτία',
    locationEn: 'Livadeia, Boeotia',
  },
  {
    id: 'tanagra-2024',
    municipality: 'Δήμος Ταναγράς',
    municipalityEn: 'Municipality of Tanagra',
    project: 'Δίκτυο ανακύκλωσης γυαλιού',
    projectEn: 'Glass recycling network',
    year: '2024',
    category: 'recycling',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€32,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '1.5 μήνες / 1.5 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Δημιουργία ολοκληρωμένου δικτύου ανακύκλωσης γυαλιού με κώδωνες σε 25 στρατηγικά σημεία του Δήμου και μεγάλους κάδους για άλλα υλικά.',
    descriptionEn: 'Creation of a complete glass recycling network with bells at 25 strategic locations in the Municipality and large bins for other materials.',
    equipment: [
      { name: 'Κώδωνες γυαλιού', nameEn: 'Glass bells', quantity: '25 τεμ. / 25 units' },
      { name: 'Κάδοι 1100L', nameEn: '1100L bins', quantity: '30 τεμ. / 30 units' },
    ],
    installationDate: 'Φεβρουάριος 2024 / February 2024',
    location: 'Σχηματάρι, Βοιωτία',
    locationEn: 'Schimatari, Boeotia',
  },
  {
    id: 'orchomenos-2023',
    municipality: 'Δήμος Ορχομενού',
    municipalityEn: 'Municipality of Orchomenos',
    project: 'Εξοπλισμός παιδικών χαρών και ανακύκλωση',
    projectEn: 'Playground equipment and recycling',
    year: '2023',
    category: 'playground',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€52,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '4 μήνες / 4 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Πλήρης ανακαίνιση παιδικών χαρών με σύγχρονο και ασφαλή εξοπλισμό, συμπληρωμένη με σύστημα ανακύκλωσης και αστικό εξοπλισμό.',
    descriptionEn: 'Complete renovation of playgrounds with modern and safe equipment, complemented by a recycling system and urban furniture.',
    equipment: [
      { name: 'Παιδικά όργανα', nameEn: 'Playground equipment', quantity: '35 τεμ. / 35 units' },
      { name: 'Κάδοι ανακύκλωσης 240L', nameEn: 'Recycling bins 240L', quantity: '40 τεμ. / 40 units' },
      { name: 'Κάδοι ανακύκλωσης 360L', nameEn: 'Recycling bins 360L', quantity: '30 τεμ. / 30 units' },
      { name: 'Παγκάκια', nameEn: 'Benches', quantity: '20 τεμ. / 20 units' },
    ],
    installationDate: 'Οκτώβριος 2023 / October 2023',
    location: 'Ορχομενός, Βοιωτία',
    locationEn: 'Orchomenos, Boeotia',
  },
  {
    id: 'distomo-2024',
    municipality: 'Δήμος Διστόμου-Αράχοβας-Αντίκυρας',
    municipalityEn: 'Municipality of Distomo-Arachova-Antikyra',
    project: 'Υπόγεια συστήματα διαχείρισης απορριμμάτων',
    projectEn: 'Underground waste management systems',
    year: '2024',
    category: 'recycling',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€95,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '5 μήνες / 5 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Σύγχρονο σύστημα υπόγειων κάδων σε 8 κεντρικά σημεία των οικισμών. Αισθητική λύση που εξοικονομεί χώρο και βελτιώνει την καθαριότητα.',
    descriptionEn: 'Modern underground bin system at 8 central locations in the settlements. Aesthetic solution that saves space and improves cleanliness.',
    equipment: [
      { name: 'Υπόγεια συστήματα', nameEn: 'Underground systems', quantity: '8 τεμ. / 8 units' },
      { name: 'Κάδοι ανακύκλωσης', nameEn: 'Recycling bins', quantity: '50 τεμ. / 50 units' },
    ],
    installationDate: 'Ιανουάριος 2024 / January 2024',
    location: 'Δίστομο, Αράχοβα',
    locationEn: 'Distomo, Arachova',
  },
  {
    id: 'aliartos-2023',
    municipality: 'Δήμος Αλιάρτου-Θεσπιέων',
    municipalityEn: 'Municipality of Aliartos-Thespies',
    project: 'Πάρκα άθλησης και αστικός εξοπλισμός',
    projectEn: 'Sports parks and urban furniture',
    year: '2023',
    category: 'gym',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€41,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '3 μήνες / 3 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Δημιουργία 3 σύγχρονων πάρκων άθλησης με πλήρη εξοπλισμό και αστικό εξοπλισμό για την εξυπηρέτηση των πολιτών.',
    descriptionEn: 'Creation of 3 modern sports parks with complete equipment and urban furniture to serve citizens.',
    equipment: [
      { name: 'Όργανα γυμναστικής', nameEn: 'Gym equipment', quantity: '30 τεμ. / 30 units' },
      { name: 'Παγκάκια', nameEn: 'Benches', quantity: '25 τεμ. / 25 units' },
      { name: 'Κάδοι 1100L', nameEn: '1100L bins', quantity: '15 τεμ. / 15 units' },
      { name: 'Φωτιστικά', nameEn: 'Lighting', quantity: '12 τεμ. / 12 units' },
    ],
    installationDate: 'Ιούλιος 2023 / July 2023',
    location: 'Αλίαρτος, Θεσπιές',
    locationEn: 'Aliartos, Thespies',
  },
  {
    id: 'chaeronea-2024',
    municipality: 'Δήμος Χαιρώνειας',
    municipalityEn: 'Municipality of Chaeronea',
    project: 'Ολοκληρωμένο σύστημα ανακύκλωσης',
    projectEn: 'Complete recycling system',
    year: '2024',
    category: 'recycling',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€36,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '2 μήνες / 2 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Εγκατάσταση 80 κάδων ανακύκλωσης διαφόρων μεγεθών και κωδώνων γυαλιού σε όλη την έκταση του Δήμου.',
    descriptionEn: 'Installation of 80 recycling bins of various sizes and glass bells throughout the Municipality.',
    equipment: [
      { name: 'Κάδοι 240L', nameEn: '240L bins', quantity: '45 τεμ. / 45 units' },
      { name: 'Κάδοι 360L', nameEn: '360L bins', quantity: '35 τεμ. / 35 units' },
      { name: 'Κώδωνες γυαλιού', nameEn: 'Glass bells', quantity: '12 τεμ. / 12 units' },
    ],
    installationDate: 'Απρίλιος 2024 / April 2024',
    location: 'Χαιρώνεια, Βοιωτία',
    locationEn: 'Chaeronea, Boeotia',
  },
  {
    id: 'koroneia-2023',
    municipality: 'Δήμος Κορωνείας',
    municipalityEn: 'Municipality of Koroneia',
    project: 'Παιδικές χαρές και ανακύκλωση',
    projectEn: 'Playgrounds and recycling',
    year: '2023',
    category: 'playground',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€48,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '3.5 μήνες / 3.5 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Ανακαίνιση παιδικών χαρών με ασφαλή εξοπλισμό, παγκάκια πάρκου και σύστημα ανακύκλωσης.',
    descriptionEn: 'Renovation of playgrounds with safe equipment, park benches and recycling system.',
    equipment: [
      { name: 'Παιδικά όργανα', nameEn: 'Playground equipment', quantity: '28 τεμ. / 28 units' },
      { name: 'Παγκάκια', nameEn: 'Benches', quantity: '18 τεμ. / 18 units' },
      { name: 'Κάδοι ανακύκλωσης', nameEn: 'Recycling bins', quantity: '35 τεμ. / 35 units' },
    ],
    installationDate: 'Ιούνιος 2023 / June 2023',
    location: 'Κορώνεια, Βοιωτία',
    locationEn: 'Koroneia, Boeotia',
  },
  {
    id: 'akraifnia-2024',
    municipality: 'Δήμος Ακραιφνίας',
    municipalityEn: 'Municipality of Akraifnia',
    project: 'Δίκτυο κωδώνων ανακύκλωσης',
    projectEn: 'Recycling bells network',
    year: '2024',
    category: 'recycling',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€22,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '1 μήνας / 1 month' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Εγκατάσταση κωδώνων γυαλιού σε 15 σημεία και κάδων ανακύκλωσης για την κάλυψη όλων των αναγκών του Δήμου.',
    descriptionEn: 'Installation of glass bells at 15 locations and recycling bins to cover all Municipality needs.',
    equipment: [
      { name: 'Κώδωνες γυαλιού', nameEn: 'Glass bells', quantity: '15 τεμ. / 15 units' },
      { name: 'Κάδοι 240L', nameEn: '240L bins', quantity: '40 τεμ. / 40 units' },
    ],
    installationDate: 'Μάιος 2024 / May 2024',
    location: 'Ακραιφνία, Βοιωτία',
    locationEn: 'Akraifnia, Boeotia',
  },
  {
    id: 'dorida-2023',
    municipality: 'Δήμος Δωρίδος',
    municipalityEn: 'Municipality of Dorida',
    project: 'Υπόγεια συστήματα και ανακύκλωση',
    projectEn: 'Underground systems and recycling',
    year: '2023',
    category: 'recycling',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€68,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '4 μήνες / 4 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Υπόγεια συστήματα απορριμμάτων σε κεντρικά σημεία και μεγάλοι κάδοι ανακύκλωσης σε όλο το Δήμο.',
    descriptionEn: 'Underground waste systems at central locations and large recycling bins throughout the Municipality.',
    equipment: [
      { name: 'Υπόγεια συστήματα', nameEn: 'Underground systems', quantity: '6 τεμ. / 6 units' },
      { name: 'Κάδοι 1100L', nameEn: '1100L bins', quantity: '45 τεμ. / 45 units' },
    ],
    installationDate: 'Αύγουστος 2023 / August 2023',
    location: 'Λιδωρίκι, Φωκίδα',
    locationEn: 'Lidoriki, Phocis',
  },
  {
    id: 'parnassida-2024',
    municipality: 'Δήμος Παρνασσίδας',
    municipalityEn: 'Municipality of Parnassida',
    project: 'Υπαίθρια γυμναστήρια και αστικός εξοπλισμός',
    projectEn: 'Outdoor gyms and urban furniture',
    year: '2024',
    category: 'gym',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€44,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '3 μήνες / 3 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: 'Σύγχρονα όργανα υπαίθριας γυμναστικής, παγκάκια και αστικός εξοπλισμός σε κεντρικά σημεία του Δήμου.',
    descriptionEn: 'Modern outdoor gym equipment, benches and urban furniture at central locations in the Municipality.',
    equipment: [
      { name: 'Όργανα γυμναστικής', nameEn: 'Gym equipment', quantity: '32 τεμ. / 32 units' },
      { name: 'Παγκάκια', nameEn: 'Benches', quantity: '28 τεμ. / 28 units' },
      { name: 'Κάδοι απορριμμάτων', nameEn: 'Waste bins', quantity: '20 τεμ. / 20 units' },
    ],
    installationDate: 'Φεβρουάριος 2024 / February 2024',
    location: 'Ιτέα, Αμφισσα',
    locationEn: 'Itea, Amfissa',
  },
  {
    id: 'delphi-2023',
    municipality: 'Δήμος Δελφών',
    municipalityEn: 'Municipality of Delphi',
    project: 'Ολοκληρωμένο πρόγραμμα ανακύκλωσης',
    projectEn: 'Complete recycling program',
    year: '2023',
    category: 'recycling',
    details: [
      { label: 'Συνολικό Κόστος', labelEn: 'Total Cost', value: '€55,000' },
      { label: 'Διάρκεια Έργου', labelEn: 'Project Duration', value: '3.5 μήνες / 3.5 months' },
      { label: 'Κατάσταση', labelEn: 'Status', value: 'Ολοκληρωμένο / Completed' },
    ],
    description: '120 κάδοι ανακύκλωσης διαφόρων μεγεθών για την πλήρη κάλυψη των αναγκών του ιστορικού Δήμου Δελφών.',
    descriptionEn: '120 recycling bins of various sizes to fully cover the needs of the historic Municipality of Delphi.',
    equipment: [
      { name: 'Κάδοι 240L', nameEn: '240L bins', quantity: '50 τεμ. / 50 units' },
      { name: 'Κάδοι 360L', nameEn: '360L bins', quantity: '40 τεμ. / 40 units' },
      { name: 'Κάδοι 1100L', nameEn: '1100L bins', quantity: '30 τεμ. / 30 units' },
    ],
    installationDate: 'Νοέμβριος 2023 / November 2023',
    location: 'Δελφοί, Φωκίδα',
    locationEn: 'Delphi, Phocis',
  },
];

export const getProjectById = (id: string): MunicipalProject | undefined => {
  return municipalProjects.find(project => project.id === id);
};

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.machinery': 'Agricultural Machinery',
    'nav.recycling': 'Recycling Systems',
    'nav.environmental': 'Environmental Equipment',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'MALERDOS',
    'hero.subtitle': 'Recycling & Agricultural Technology Systems',
    'hero.description': 'Leading provider of agricultural machinery, recycling systems, and environmental solutions for municipalities and businesses across Greece.',
    'hero.cta': 'Explore Products',
    'hero.contact': 'Request Quote',
    
    // Categories
    'category.machinery': 'Agricultural Machinery',
    'category.machinery.desc': 'Professional equipment for modern farming',
    'category.recycling': 'Recycling Systems',
    'category.recycling.desc': 'Complete waste management solutions',
    'category.environmental': 'Environmental Equipment',
    'category.environmental.desc': 'Sustainable technology for communities',
    
    // Products
    'products.featured': 'Featured Products',
    'products.viewAll': 'View All Products',
    'products.quote': 'Request Quote',
    'products.details': 'View Details',
    'products.specifications': 'Specifications',
    'products.price': 'Price',
    'products.contactForPrice': 'Contact for Price',
    'products.allProducts': 'All Products',
    
    // Projects
    'projects.title': 'Municipal & Environmental Projects',
    'projects.description': 'We partner with municipalities and communities across Greece to deliver comprehensive recycling and environmental solutions.',
    'projects.learn': 'Learn More',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.address': 'Kastro, Viotia, Greece',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.social': 'Follow Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.product': 'Product of Interest',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you! We will contact you soon.',
    
    // Footer
    'footer.about': 'About MALERDOS',
    'footer.aboutText': 'Professional supplier of agricultural machinery and environmental systems since establishment in Kastro, Viotia.',
    'footer.rights': 'All rights reserved.',
  },
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.machinery': 'Γεωργικά Μηχανήματα',
    'nav.recycling': 'Συστήματα Ανακύκλωσης',
    'nav.environmental': 'Περιβαλλοντικός Εξοπλισμός',
    'nav.projects': 'Έργα',
    'nav.contact': 'Επικοινωνία',
    
    // Hero
    'hero.title': 'MALERDOS',
    'hero.subtitle': 'Συστήματα Ανακύκλωσης & Γεωργικής Τεχνολογίας',
    'hero.description': 'Κορυφαίος προμηθευτής γεωργικών μηχανημάτων, συστημάτων ανακύκλωσης και περιβαλλοντικών λύσεων για δήμους και επιχειρήσεις σε όλη την Ελλάδα.',
    'hero.cta': 'Εξερευνήστε Προϊόντα',
    'hero.contact': 'Ζητήστε Προσφορά',
    
    // Categories
    'category.machinery': 'Γεωργικά Μηχανήματα',
    'category.machinery.desc': 'Επαγγελματικός εξοπλισμός για σύγχρονη γεωργία',
    'category.recycling': 'Συστήματα Ανακύκλωσης',
    'category.recycling.desc': 'Ολοκληρωμένες λύσεις διαχείρισης αποβλήτων',
    'category.environmental': 'Περιβαλλοντικός Εξοπλισμός',
    'category.environmental.desc': 'Βιώσιμη τεχνολογία για κοινότητες',
    
    // Products
    'products.featured': 'Προτεινόμενα Προϊόντα',
    'products.viewAll': 'Δείτε Όλα τα Προϊόντα',
    'products.quote': 'Ζητήστε Προσφορά',
    'products.details': 'Λεπτομέρειες',
    'products.specifications': 'Προδιαγραφές',
    'products.price': 'Τιμή',
    'products.contactForPrice': 'Επικοινωνήστε για Τιμή',
    'products.allProducts': 'Όλα τα Προϊόντα',
    
    // Projects
    'projects.title': 'Δημοτικά & Περιβαλλοντικά Έργα',
    'projects.description': 'Συνεργαζόμαστε με δήμους και κοινότητες σε όλη την Ελλάδα για να παρέχουμε ολοκληρωμένες λύσεις ανακύκλωσης και περιβάλλοντος.',
    'projects.learn': 'Μάθετε Περισσότερα',
    
    // Contact
    'contact.title': 'Επικοινωνήστε',
    'contact.address': 'Κάστρο, Βοιωτία, Ελλάδα',
    'contact.phone': 'Τηλέφωνο',
    'contact.email': 'Email',
    'contact.social': 'Ακολουθήστε μας',
    'contact.form.name': 'Όνομα',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Τηλέφωνο',
    'contact.form.message': 'Μήνυμα',
    'contact.form.product': 'Προϊόν Ενδιαφέροντος',
    'contact.form.submit': 'Αποστολή Μηνύματος',
    'contact.form.success': 'Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα.',
    
    // Footer
    'footer.about': 'Σχετικά με MALERDOS',
    'footer.aboutText': 'Επαγγελματικός προμηθευτής γεωργικών μηχανημάτων και περιβαλλοντικών συστημάτων από την ίδρυσή μας στο Κάστρο Βοιωτίας.',
    'footer.rights': 'Όλα τα δικαιώματα διατηρούνται.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

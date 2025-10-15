import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MALERDOS
            </h3>
            <p className="text-muted-foreground">
              {t('footer.aboutText')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('nav.contact')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>ΜΑΛΕΡΔΟΣ, Π., & ΣΙΑ Ο.Ε.</p>
              <p>Εθνικής οδού Αθηνών Λαμίας 113 χλμ</p>
              <p>Κάστρο 322 00</p>
              <p>+30 6944457589</p>
              <p>malerdospanos25@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('contact.social')}</h4>
            <a
              href="https://instagram.com/malerdos_environmental_systems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} MALERDOS. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

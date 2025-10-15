import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Το όνομα είναι υποχρεωτικό').max(100, 'Το όνομα πρέπει να είναι λιγότερο από 100 χαρακτήρες'),
  email: z.string().trim().email('Μη έγκυρη διεύθυνση email').max(255, 'Το email πρέπει να είναι λιγότερο από 255 χαρακτήρες'),
  phone: z.string().max(20, 'Το τηλέφωνο πρέπει να είναι λιγότερο από 20 χαρακτήρες').optional(),
  message: z.string().trim().min(1, 'Το μήνυμα είναι υποχρεωτικό').max(1000, 'Το μήνυμα πρέπει να είναι λιγότερο από 1000 χαρακτήρες'),
});

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Call edge function to send email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData,
      });

      if (error) throw error;

      toast({
        title: "Ευχαριστούμε για την επικοινωνία!",
        description: "Θα σας καλέσουμε σύντομα.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      if (error instanceof z.ZodError) {
        toast({
          title: 'Σφάλμα επικύρωσης',
          description: error.errors[0].message,
          variant: 'destructive',
          duration: 5000,
        });
      } else {
        toast({
          title: 'Σφάλμα αποστολής',
          description: 'Παρουσιάστηκε πρόβλημα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.',
          variant: 'destructive',
          duration: 5000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 mb-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.address')}</h3>
                    <p className="text-muted-foreground">ΜΑΛΕΡΔΟΣ, Π., & ΣΙΑ Ο.Ε.</p>
                    <p className="text-muted-foreground">Εθνικής οδού Αθηνών Λαμίας 113 χλμ</p>
                    <p className="text-muted-foreground">Κάστρο 322 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.phone')}</h3>
                    <a href="tel:+306944457589" className="text-muted-foreground hover:text-primary">
                      +30 6944457589
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.email')}</h3>
                    <a href="mailto:malerdospanos25@gmail.com" className="text-muted-foreground hover:text-primary">
                      malerdospanos25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.social')}</h3>
                    <a
                      href="https://instagram.com/malerdos_environmental_systems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @malerdos_environmental_systems
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={t('contact.form.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Αποστολή...' : t('contact.form.submit')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

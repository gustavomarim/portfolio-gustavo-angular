export interface Enacom {
  subject_matter: string;
  comment: string;
  contact: Contact;
}

interface Contact {
  name: string;
  tel: string;
  email: string;
}

// Vetrina "Auto che abbiamo consegnato" — fonte dati UNICA per la sezione,
// usata sia in Home che in Chi siamo tramite <SoldCars />.
//
// ⚠️ FOTO SEGNAPOSTO: al momento usiamo le foto auto già presenti nel sito.
// Quando arrivano le foto reali delle auto consegnate, sostituire i path in
// `images` (1 o più foto per auto: la card mostra una galleria sfogliabile).
// Per privacy: usare iniziali del cliente (non il nome completo) e foto senza
// targa leggibile.

export interface SoldCar {
  model: string;        // es. "Mercedes Classe A" (obbligatorio)
  images: string[];     // 1+ foto dell'auto (galleria, obbligatorio)
  year?: number;        // anno immatricolazione
  km?: string;          // es. "28.000 km"
  price?: string;       // es. "€ 13.900" (omesso = mostra solo "Venduta")
  fuel?: string;        // es. "Ibrida"
  details?: string;     // motore/allestimento sotto il titolo, es. "1.5 · 116 CV · Premium"
  equipment?: string[]; // optional mostrati come pillole, es. ["Tettuccio apribile"]
  initials?: string;    // iniziali cliente, es. "M.R."
  name?: string;        // nome/iniziali cliente da mostrare
  city?: string;        // città di consegna
  rating?: number;      // stelle (default 5)
  text?: string;        // mini-recensione del cliente
}

// Auto realmente consegnate (FOTO reali Diamanti).
// ⚠️ DATI SEGNAPOSTO: year/km/price/fuel + recensione, nome e città cliente sono
// INVENTATI a scopo dimostrativo. Sostituire con i dati reali quando disponibili.
export const SOLD_CARS: SoldCar[] = [
  {
    model: 'Mercedes Classe A 180',
    images: ['/images/mercedes-classe-a-bianca.webp'],
    year: 2020,
    km: '118.000 km',
    price: '€ 23.500',
    fuel: 'Diesel',
    details: '1.5 · 116 CV · Premium',
    equipment: ['Tettuccio apribile', 'Sedili riscaldati'],
    initials: 'GD',
    name: 'Giulia D.',
    city: 'Roma',
    text: 'Cercavo una premium compatta verificata in ogni dettaglio: trovata, controllata e consegnata sotto casa. Servizio impeccabile.',
  },
  {
    model: 'Lancia Ypsilon Platinum',
    images: ['/images/lancia-ypsilon-grigia.webp'],
    year: 2009,
    km: '98.000 km',
    price: '€ 4.500',
    fuel: 'Benzina',
    equipment: ['Tettuccio apribile', 'Interni in pelle'],
    initials: 'MC',
    name: 'Martina C.',
    city: 'Napoli',
    text: 'Volevo una citycar affidabile e senza sorprese sui chilometri. Mi hanno guidata nella scelta con grande trasparenza. Consigliatissimi.',
  },
  {
    model: 'Volkswagen Tiguan',
    images: ['/images/vw-tiguan-bianco.webp'],
    year: 2012,
    km: '110.000 km',
    price: '€ 13.900',
    fuel: 'Diesel',
    initials: 'SR',
    name: 'Stefano R.',
    city: 'Firenze',
    text: 'Un SUV familiare controllato a fondo prima dell’acquisto. Trattativa, pratiche e consegna gestite senza un pensiero. Top.',
  },
  {
    model: 'Mercedes Classe A 180',
    images: ['/images/mercedes-classe-a-grigia.webp'],
    year: 2024,
    km: '28.350 km',
    price: '€ 35.000',
    fuel: 'Diesel',
    details: '1.5 · 116 CV · Premium',
    equipment: ['Full optional', 'Tettuccio apribile', 'Sedili riscaldati elettrici', 'Cerchi 19″'],
    initials: 'DL',
    name: 'Davide L.',
    city: 'Torino',
    text: 'Volevo una Classe A recente, allestimento giusto e chilometri certi. Me l’hanno trovata e consegnata in pochi giorni. Eccellenti.',
  },
  {
    model: 'Mercedes Classe A 250e',
    images: ['/images/mercedes-classe-a-nera.webp'],
    year: 2023,
    km: '81.418 km',
    price: '€ 30.900',
    fuel: 'Ibrida plug-in',
    details: 'Ibrida (benzina/elettrica) · 218 CV',
    initials: 'CV',
    name: 'Chiara V.',
    city: 'Bari',
    text: 'Cercavo la mia Classe A nera AMG Line da mesi. Loro l’hanno verificata in ogni dettaglio e portata a casa. Zero pensieri.',
  },
];

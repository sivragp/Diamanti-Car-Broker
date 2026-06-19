// Vetrina "Auto che abbiamo consegnato" — fonte dati UNICA per la sezione,
// usata sia in Home che in Chi siamo tramite <SoldCars />.
//
// ⚠️ FOTO SEGNAPOSTO: al momento usiamo le foto auto già presenti nel sito.
// Quando arrivano le foto reali delle auto consegnate, sostituire i path in
// `images` (1 o più foto per auto: la card mostra una galleria sfogliabile).
// Per privacy: usare iniziali del cliente (non il nome completo) e foto senza
// targa leggibile.

export interface SoldCar {
  model: string;        // es. "Fiat 500 1.0 Hybrid"
  year: number;         // anno immatricolazione
  km: string;           // es. "28.000 km"
  price: string;        // es. "€ 13.900"
  fuel?: string;        // es. "Ibrida" (facoltativo)
  images: string[];     // 1+ foto dell'auto (galleria)
  initials: string;     // iniziali cliente, es. "FP"
  name: string;         // nome cliente, es. "Francesca P."
  city: string;         // città di consegna
  rating?: number;      // stelle (default 5)
  text: string;         // mini-recensione del cliente
}

export const SOLD_CARS: SoldCar[] = [
  {
    model: 'Fiat 500 1.0 Hybrid',
    year: 2022,
    km: '28.000 km',
    price: '€ 13.900',
    fuel: 'Ibrida',
    images: ['/images/cta-fiat-500-red.webp', '/images/fiat-500-showroom.webp'],
    initials: 'FP',
    name: 'Francesca P.',
    city: 'Bologna',
    text: 'Cercavo una citycar ibrida senza sorprese sui chilometri: trovata, verificata e consegnata a casa. Zero pensieri.',
  },
  {
    model: 'BMW X1 sDrive18d',
    year: 2021,
    km: '41.000 km',
    price: '€ 34.900',
    fuel: 'Diesel',
    images: ['/images/cta-bmw-x1.webp'],
    initials: 'MR',
    name: 'Marco R.',
    city: 'Milano',
    text: "Servizio impeccabile. Hanno trovato l'auto perfetta in tempi record e me l'hanno portata sotto casa.",
  },
  {
    model: 'Audi A5 Sportback 40 TDI',
    year: 2020,
    km: '52.000 km',
    price: '€ 38.500',
    fuel: 'Diesel',
    images: ['/images/audi-a5-viale.webp'],
    initials: 'LB',
    name: 'Luca B.',
    city: 'Roma',
    text: 'Professionale e trasparente in ogni fase. Auto come da foto, consegna puntuale e nessuna sorpresa.',
  },
  {
    model: 'Mercedes Classe A 180 d',
    year: 2021,
    km: '35.000 km',
    price: '€ 26.900',
    fuel: 'Diesel',
    images: ['/images/cta-mercedes-a.webp'],
    initials: 'EF',
    name: 'Elena F.',
    city: 'Roma',
    text: "Massima competenza e zero sorprese. Esattamente l'auto che cercavo, verificata in ogni dettaglio.",
  },
  {
    model: 'Mini Cooper',
    year: 2022,
    km: '24.000 km',
    price: '€ 21.500',
    fuel: 'Benzina',
    images: ['/images/mini-cooper-showroom.webp'],
    initials: 'AT',
    name: 'Alessandro T.',
    city: 'Torino',
    text: 'Non avrei mai trovato questa auto a queste condizioni da solo. Servizio davvero top.',
  },
  {
    model: 'Peugeot 208',
    year: 2022,
    km: '19.000 km',
    price: '€ 17.900',
    fuel: 'Benzina',
    images: ['/images/cta-peugeot-208.webp'],
    initials: 'GM',
    name: 'Giorgio M.',
    city: 'Milano',
    text: 'Mi hanno seguito dalla ricerca alla consegna senza stress. Trasparenti e sempre disponibili.',
  },
];

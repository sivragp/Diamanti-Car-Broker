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
  initials?: string;    // iniziali cliente, es. "M.R."
  name?: string;        // nome/iniziali cliente da mostrare
  city?: string;        // città di consegna
  rating?: number;      // stelle (default 5)
  text?: string;        // mini-recensione del cliente
}

// Auto realmente consegnate (foto reali Diamanti). Niente prezzo in vetrina.
// TODO dati cliente: compilare year, km, fuel, name (iniziali), city, text con
// i dati reali forniti dal cliente. Finché restano vuoti, la card mostra solo
// foto + badge VENDUTA + modello (nessun dato inventato online).
export const SOLD_CARS: SoldCar[] = [
  {
    model: 'Mercedes-Benz Classe A',
    images: ['/images/mercedes-classe-a-bianca.webp'],
    // year: 0, km: '', fuel: '', name: '', city: '', text: '',
  },
  {
    model: 'Lancia Ypsilon',
    images: ['/images/lancia-ypsilon-grigia.webp'],
    // year: 0, km: '', fuel: '', name: '', city: '', text: '',
  },
  {
    model: 'Volkswagen Tiguan',
    images: ['/images/vw-tiguan-bianco.webp'],
    // year: 0, km: '', fuel: '', name: '', city: '', text: '',
  },
];

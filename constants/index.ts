export const NAV_LINKS = [
  {
    href: '/',
    key: 'po',
    label: 'Početna',
    variant: 'outline_btn',
  },
  {
    href: '/restorani',
    key: 'restorani',
    label: 'Svi Restorani',
    variant: 'outline_btn',
  },

  {
    href: '/zavlasnike',
    key: 'vlasnik',
    label: 'Pridruži Se ',
    variant: 'black_btn',
  },
];
export const KATEGORIJE = [
  {
    naziv: 'Restoran',
    key: 'restoran',
    slika: '',
  },
  {
    naziv: 'FastFood',
    key: 'fast',
    slika: '',
  },
  {
    naziv: 'Kafić',
    key: 'kafic',
    slika: '',
  },
  {
    naziv: 'Kafana',
    key: 'kafana',
    slika: '',
  },
  {
    naziv: 'Picerija',
    key: 'picerija',
    slika: '',
  },
  {
    naziv: 'Pekara',
    key: 'pekara',
    slika: '',
  },
  {
    naziv: 'Roštiljnica',
    key: 'rostiljnica',
    slika: '',
  },
  {
    naziv: 'Buregdžinica',
    key: 'buregdzinica',
    slika: '',
  },
];
export const DISCOVERY = [
  {
    naslov: 'Najsočnija hrana',
    desc: 'Isprobajte ukusne obroke u omiljenim restoranima',
    link: '/restorani/kategorije/restoran',
    slika: '/juicy.jpg',
    key: '1',
  },
  {
    naslov: `Najnoviji trendovi! `,
    desc: 'Osetite ukus u gradskim biserima!',
    link: '/restorani',
    slika: '/unique.jpg',
    key: '2',
  },
  {
    naslov: 'Sveže u ponudi!',
    desc: ' Isprobajte nove ukuse u vašoj okolini.',
    link: '/restorani',
    slika: '/novo.jpg',
    key: '3',
  },
  {
    naslov: 'Brzinski ručak!',
    desc: 'Otkrijte najukusnije opcije tokom užurbanog dana',
    link: '/restorani/kategorije/fast',
    slika: '/brzo.jpg',
    key: '4',
  },
];
export const FOOTER = [
  {
    title: 'Kategorije',
    links: [
      {
        text: 'Fast Food',
        link: '/restorani/kategorije/fast',
      },
      {
        text: 'Restoran',
        link: '/restorani/kategorije/restoran',
      },
      {
        text: 'Picerija',
        link: '/restorani/kategorije/picerija',
      },
      {
        text: 'Kafana',
        link: '/restorani/kategorije/kafana',
      },

      {
        text: 'Kafić',
        link: '/restorani/kategorije/kafic',
      },
    ],
  },
  {
    title: 'Info',
    links: [
      {
        text: 'Pridruži se',
        link: '/zavlasnike',
      },
      {
        text: 'Svi restorani',
        link: '/restorani',
      },

      {
        text: 'Kontaktiraj nas',
        link: '/restorani',
      },
    ],
  },
];
export const SOCIALS = [
  {
    title: 'Social',
    links: [
      {
        img: '/facebook.png',
        link: 'https://www.facebook.com/',
      },
      {
        img: '/instagram.png',
        link: 'https://www.instagram.com/',
      },
      {
        img: '/tiktok.png',
        link: 'https://www.tiktok.com/',
      },
    ],
  },
];
export const FEATURES = [
  {
    naslov: 'Povećajte prodaju',
    desc: 'Držite kuhinju zaposlenom. Pridružite se dobro podmazanoj marketinškoj mašini i posmatrajte porudžbine kako stižu na vrata i online.',
    slika: '/stonks.png',
    key: '1',
  },
  {
    naslov: `Dosegnite više kupaca`,
    desc: 'Upoznajte ih i zadržite. Privucite nove lokalne kupce i zadržavajte ih da se stalno vraćaju.',
    slika: '/rating.png',
    key: '2',
  },
  {
    naslov: 'Koristite naše usluge',
    desc: 'Za firme velike i male. Bez obzira na vašu veličinu, imamo alate, podršku za biznis i uštede koje će vam pomoći u rastu vašeg poslovanja.',
    slika: '/support.png',
    key: '3',
  },
];
export const STEPS = [
  {
    naslov: 'Popunite Formu',
    desc: 'Nema komplikovanih koraka. Samo popunite jednostavnu formu ispod sa osnovnim informacijama o vašem restoranu.',
    key: '1',
  },
  {
    naslov: `Dodajte Jelovnik i Slike Vaših Specijaliteta`,
    desc: 'Dodajte jelovnik i slike najukusnijih jela za privlačenje posetilaca. Slike govore više od reči, stoga dodajte vizuelni doživljaj vaših specijaliteta.',
    key: '2',
  },
  {
    naslov: 'Unapredite Vaš Restoran s Nama',
    desc: 'Nakon dostavljenih informacija, postajete deo naše platforme i spremni ste za dobrodošlicu novim gostima.',
    key: '3',
  },
];
export const DANISRP = [
  'Ponedeljak',
  'Utorak',
  'Sreda',
  'Četvrtak',
  'Petak',
  'Subota',
  'Nedelja',
];
export const DANI = [
  { dan: 'monday', danSrp: 'Ponedeljak' },
  { dan: 'tuesday', danSrp: 'Utorak' },
  { dan: 'wednesday', danSrp: 'Sreda' },
  { dan: 'thursday', danSrp: 'Četvrtak' },
  { dan: 'friday', danSrp: 'Petak' },
  { dan: 'saturday', danSrp: 'Subota' },
  { dan: 'sunday', danSrp: 'Nedelja' },
];

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
        text: 'Svi restorani',
        link: '/restorani',
      },

      {
        text: 'Pridruži se',
        link: '/zavlasnike',
      },
      {
        text: 'Mapa svih objekata',
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

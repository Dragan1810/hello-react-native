import { Icon } from './icons'

export const MainRoutes = [
  {
    id: 'Production',
    title: 'Proizvodnja',
    icon: Icon.knife
  },
  {
    id: 'RobniPromet',
    title:'Prijemnice',
    icon: require('../assets/png/truck.png')
  },
   {
    id: 'Magacin',
    title: 'Magacin',
    icon: Icon.warehouse
  },
  {
    id:'Linkovi',
    title:'Korisni Linkovi',
    icon: Icon.organization
  },
  {
    id: 'Kartoteka',
    title: 'Kartoteka',
    icon: Icon.lager
 },
 {
  id: 'Kartoteka',
  title: 'Ljudski Resursi',
  icon: Icon.organization
}
];

export const LinkRoutes = [
  {
    id: 'web',
    title: 'Trlic',
    icon: Icon.knife,
    uri: 'http://trlic.com/cenovnik/'
  },
  {
    id: 'web',
    title: 'Rossel khoznadzor',
    icon: Icon.knife,
    uri: 'http://www.rosselkhoznadzor.ru/fsvps/importExport/serbia/enterprises.html?product=2&productType=1&_language=en'

  },
  {
    id: 'web',
    title: 'Kursna Lista',
    icon: Icon.knife,
    uri: 'https://www.kursna-lista.com/kursna-lista-nbs'

  },
  {
    id: 'web',
    title: 'Pig333',
    icon: Icon.knife,
    uri: 'https://www.pig333.com/markets_and_prices/'

  },
  {
    id: 'web',
    title: 'Vet.minpolj',
    icon: Icon.knife,
    uri: 'http://www.vet.minpolj.gov.rs/'

  },
  {
    id: 'web',
    title: 'Matijevic',
    icon: Icon.knife,
    uri: 'https://matijevic.rs/akcije/'

  }
];

export const ProizvodnjaRoutes = [
  {
    id: 'goveda',
    title: 'Goveda',
    icon: require('../assets/Icons/cow.png')
  },
  {
    id: 'lamb',
    title: 'Jagnjad',
    icon: require('../assets/Icons/Ram.png')
  },
  {
    id: 'pig',
    title: 'Svinje',
    icon: require('../assets/Icons/Pig.png')
  }
]

export const HRRoutes = [
  {
    id: 'goveda',
    title: 'Klanja',
    icon: Icon.knife
  }

]

export const GovedaRoutes = [
  {
    id: 'preGovedaKlanja',
    title: 'Predhodna klanja',
    icon: require('../assets/Icons/pred.png')
  },
  {
    id: 'aktGovedaKlanja',
    title: 'Aktivna klanja',
    icon: require('../assets/Icons/aktivnok.png')
  }
]

export const LambRoutes = [
  {
    id: 'preLambKlanja',
    title: 'Predhodna Klanja',
    icon: require('../assets/Icons/pred.png')
  },
  {
    id: 'aktLambKlanja',
    title: 'Aktivna Klanja',
    icon: require('../assets/Icons/aktivnok.png')
  }
]

export const PigRoutes = [
  {
    id: 'prePigKlanja',
    title: 'Prethodna Klanja',
    icon: require('../assets/Icons/pred.png')
  },
  {
    id: 'aktPigKlanja',
    title: 'Aktivna Klanja',
    icon: require('../assets/Icons/aktivnok.png')
  }
]

export const KartotekaRoutes = [
  {
    id: 'product',
    title: 'Artikli',
    icon: require('../assets/Icons/steak.png')
  },
  {
    id: 'animal',
    title: 'Zivotinje',
    icon: require('../assets/png/032-cow.png')
  }
]

export const MagacinRoutes = [
  {
    id: 'stock',
    title: 'Lager',
    icon: require('../assets/Icons/warehouse.png')
  },
  {
    id: 'warehouse',
    title: 'Skladista',
    icon: require('../assets/png/004-warehouse-1.png')
  },
  {
    id: 'depot',
    title: 'Depoi',
    icon: require('../assets/png/042-barn.png')
  }
]
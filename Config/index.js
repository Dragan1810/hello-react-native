import { Icon } from './icons'

export const MainRoutes = [
  {
    id: 'Production',
    title: 'Proizvodnja',
    icon: Icon.knife
  },
  {
    id: 'Kartoteka',
    title: 'Kartoteka',
    icon: Icon.lager
  },
  {
    id: 'Magacin',
    title: 'Magacin',
    icon: Icon.warehouse
  },
  {
    id: 'Company',
    title: 'Kompanije',
    icon: Icon.organization
  },
  {
    id: 'RobniPromet',
    title:'Dokumenti',
    icon: require('../assets/Icons/steak.png')
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
    icon: require('../assets/Icons/calendar.png')
  },
  {
    id: 'animal',
    title: 'Animal',
    icon: require('../assets/Icons/calendar.png')
  },
  {
    id: 'subAnimal',
    title: 'SubAnimal',
    icon: require('../assets/Icons/calendar.png')
  }
]

export const MagacinRoutes = [
  {
    id: 'stock',
    title: 'Lager',
    icon: require('../assets/Icons/calendar.png')
  },
  {
    id: 'warehouse',
    title: 'Warehouse',
    icon: require('../assets/Icons/calendar.png')
  },
  {
    id: 'depot',
    title: 'Depot',
    icon: require('../assets/Icons/calendar.png')
  },
  {
    id: 'box',
    title: 'Boxes',
    icon: require('../assets/Icons/calendar.png')
  }
]
import { Icon } from './icons'

export const MainRoutes = [
    {
      id:'Elinkovi',
      title:'Korisni Linkovi',
      icon: Icon.organization
    }
  ];

export const LinkRoutes = [
    {
      id: 'web',
      title: 'Biogas',
      icon: require('../assets/linkovi/biogas.png'),
      uri: 'http://biogas.org.rs/'
    },
    {
      id: 'web',
      title: 'Subvencije',
      icon: Icon.knife,
      uri: 'http://subvencije.rs/zahtevi-za-podsticajna-sredstva/'

    },
    {
      id: 'web',
      title: 'Agro-Jenko',
      icon: Icon.knife,
      uri: 'http://www.agro-jenko.si/'

    },
    {
      id: 'web',
      title: 'Proberza',
      icon: Icon.knife,
      uri: 'https://www.proberza.co.rs/'

    },
    {
      id: 'web',
      title: 'EPS',
      icon: Icon.knife,
      uri: 'http://www.eps-snabdevanje.rs/kupci/Pages/Cene.aspx'

    }
  ];
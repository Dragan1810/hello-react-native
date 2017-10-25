import React from 'react';
import { DrawerNavigator,StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import preProductionScreen from '../screens/Production/preProductionScreen';
import KlanjeScreen from '../screens/Production/KlanjeScreen';
import CetvrtanjeScreen from '../screens/Production/CetvrtanjeScreen';
import EkspedicijaScreen from '../screens/Production/EkspedicijaScreen';
import preRobniPrometScreen from '../screens/RobniPromet/preRobniPrometScreen';
import InputNoteScreen from '../screens/RobniPromet/InputNoteScreen';
import preMagacinScreen from '../screens/Magacin/preMagacinScreen';
import DepotScreen from '../screens/Magacin/DepotScreen';
import WarehouseScreen from '../screens/Magacin/WarehouseScreen';
import preKartotekaScreen from '../screens/Kartoteka/preKartotekaScreen';
import ProductScreen from '../screens/Kartoteka/ProductScreen';
import AnimalScreen from '../screens/Kartoteka/AnimalScreen';
import SubAnimalScreen from '../screens/Kartoteka/SubAnimalScreen';
import prePoslovniPartnerScreen from '../screens/PoslovniPartner/prePoslovniPartnerScreen';
import BusinessPartnerScreen from '../screens/PoslovniPartner/BusinessPartnerScreen';

import CompanyScreen from '../screens/Company/CompanyScreen';
import preCompanyScreen from '../screens/Company/preCompanyScreen';






const productionNavigation = DrawerNavigator({
  preProduction: { screen: preProductionScreen },
  klanje: { screen: KlanjeScreen },
  cetvrtanje: { screen: CetvrtanjeScreen },
  ekspedicija: { screen: EkspedicijaScreen }

}, {
  contentComponent: ProductionDrawer,
},{
  initialRouteName: 'preProduction'
});

const robniPrometNavigation = DrawerNavigator({
      preRobniPromet: { screen: preRobniPrometScreen },
      inputNote: { screen: InputNoteScreen }

    }, {
      contentComponent: RobniPrometDrawer,
    },{
      initialRouteName: 'preRobniPromet'
    });

const magacinNavigation = DrawerNavigator({
      preMagacin: { screen: preMagacinScreen },
      depot: { screen: DepotScreen },
      warehouse: { screen: WarehouseScreen }

    }, {
      contentComponent: MagacinDrawer,
    },{
      initialRouteName: 'preMagacin'
    });

const kartotekaNavigation = DrawerNavigator({
      preKartoteka: { screen: preKartotekaScreen },
      product: { screen: ProductScreen },
      animal: { screen: AnimalScreen },
      subAnimal: { screen: SubAnimalScreen }

    }, {
      contentComponent: KartotekaDrawer,
    },{
      initialRouteName: 'preKartoteka'
    });

const poslovniPartnerNavigation = DrawerNavigator({
      prePoslovniPartner: { screen: prePoslovniPartnerScreen },
      businessPartner: { screen: BusinessPartnerScreen }


    }, {
      contentComponent: PoslovniPartnerDrawer,
    },{
      initialRouteName: 'prePoslovniPartner'
    });

const companyNavigation = DrawerNavigator({
      preCompany: { screen: preCompanyScreen },
      company: { screen: CompanyScreen },

    }, {
      contentComponent: CompanyDrawer,
    },{
      initialRouteName: 'preCompany'
    });


const MainNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Magacin: { screen: magacinNavigation },
  Company: { screen: companyNavigation },
  Production: { screen: productionNavigation },
  RobniPromet: { screen: robniPrometNavigation },
  Kartoteka: { screen: kartotekaNavigation },
  PoslovniPartner: { screen: poslovniPartnerNavigation }


},{
  headerMode: 'none'
},{
  initialRouteName: 'Home'
})




    export default MainNavigation;


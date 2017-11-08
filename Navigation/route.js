import React from 'react';
import { DrawerNavigator,StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import preProductionScreen from '../screens/Production/preProductionScreen';
import KlanjeScreen from '../screens/Production/KlanjeScreen';
import CetvrtanjeScreen from '../screens/Production/CetvrtanjeScreen';
import EkspedicijaScreen from '../screens/Production/EkspedicijaScreen';
import preRobniPrometScreen from '../screens/Documents/preRobniPrometScreen';
import InputNoteScreen from '../screens/Documents/InputNoteScreen';
import preMagacinScreen from '../screens/Magacin/preMagacinScreen';
import StockScreen from '../screens/Magacin/StockScreen';
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
import BoxesScreen from '../screens/Magacin/BoxesScreen';

import CompanyDrawer from '../screens/Company/CompanyDrawer';
import DocumentsDrawer from '../screens/Documents/DocumentsDrawer';
import KartotekaDrawer from '../screens/Kartoteka/KartotekaDrawer';
import MagacinDrawer from '../screens/Magacin/MagacinDrawer';
import ProductionDrawer from '../screens/Production/ProductionDrawer';
import PoslovniPartnerDrawer from '../screens/PoslovniPartner/PoslovniPartnerDrawer';


// Route za navigaciju
// prvo se importuju svi screenovi i draweri



const productionNavigation = DrawerNavigator({  // primer navigacije
  preProduction: { screen: preProductionScreen }, // routa : { ime screena gde vodi}
  klanje: { screen: KlanjeScreen },
  cetvrtanje: { screen: CetvrtanjeScreen },
  ekspedicija: { screen: EkspedicijaScreen }

}, {
  contentComponent: ProductionDrawer,  // komponenta drawera
},{
  initialRouteName: 'preProduction'  //inicijalna routa gde se postavlja pre prikazivanja opcija
});

const robniPrometNavigation = DrawerNavigator({
      preRobniPromet: { screen: preRobniPrometScreen },
      inputNote: { screen: InputNoteScreen }

    }, {
      contentComponent: DocumentsDrawer,
    },{
      initialRouteName: 'preRobniPromet'
    });

const magacinNavigation = DrawerNavigator({
      preMagacin: { screen: preMagacinScreen },
      stock: { screen: StockScreen },
      depot: { screen: DepotScreen },
      warehouse: { screen: WarehouseScreen },
      box: { screen: BoxesScreen}

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


const MainNavigation = StackNavigator({   //main navigacija u koju su ubacene sve sub navigacije
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


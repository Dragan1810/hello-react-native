import React from 'react';
import { DrawerNavigator,StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CetvrtanjeScreen from '../screens/Production/CetvrtanjeScreen';
import InputNoteScreen from '../screens/Documents/InputNoteScreen';
import StockScreen from '../screens/Magacin/StockScreen';
import DepotScreen from '../screens/Magacin/DepotScreen';
import WarehouseScreen from '../screens/Magacin/WarehouseScreen';
import ProductScreen from '../screens/Kartoteka/ProductScreen';
import AnimalScreen from '../screens/Kartoteka/AnimalScreen';
import SubAnimalScreen from '../screens/Kartoteka/SubAnimalScreen';
import BusinessPartnerScreen from '../screens/PoslovniPartner/BusinessPartnerScreen';
import CompanyScreen from '../screens/Company/CompanyScreen';
import BoxesScreen from '../screens/Magacin/BoxesScreen';
import PKlanja from '../screens/Production/Goveda/Pklanja'

import CompanyDrawer from '../screens/Company/CompanyDrawer';
import DocumentsDrawer from '../screens/Documents/DocumentsDrawer';
import KartotekaDrawer from '../screens/Kartoteka/KartotekaDrawer';
import MagacinDrawer from '../screens/Magacin/MagacinDrawer';
import ProductionDrawer from '../screens/Production/ProductionDrawer';
import PoslovniPartnerDrawer from '../screens/PoslovniPartner/PoslovniPartnerDrawer'
import govedaDrawer from '../screens/Production/Goveda/govedaDrawer'
import pigDrawer from '../screens/Production/Pig/pigDrawer'
import lambDrawer from '../screens/Production/Lamb/lambDrawer'


const PigNavigation = StackNavigator({
  prePigScreen: { screen: pigDrawer },
  inputNote: { screen: InputNoteScreen } // aktivna predhodna klanja toDO

},
{
  initialRouteName: 'prePigScreen'
});

const GovedaNavigation = StackNavigator({
  preGovedaScreen: { screen: govedaDrawer },
  preGovedaKlanja: { screen: PKlanja } // aktivna predhodna klanja toDO

},
{
  initialRouteName: 'preGovedaScreen'
});


const LambNavigation = StackNavigator({
  preLambScreen: { screen: lambDrawer },
  inputNote: { screen: InputNoteScreen } // aktivna predhodna klanja toDO

},
{
  initialRouteName: 'preLambScreen'
});

const productionNavigation = StackNavigator({  // primer navigacije
  preProduction: { screen: ProductionDrawer }, // routa : { ime screena gde vodi}
  goveda: { screen: GovedaNavigation },
  lamb: { screen: LambNavigation },
  pig: { screen: PigNavigation }

},{
  initialRouteName: 'preProduction'
});

const robniPrometNavigation = StackNavigator({
      preRobniPromet: { screen: DocumentsDrawer },
      inputNote: { screen: InputNoteScreen }

    },
    {
      initialRouteName: 'preRobniPromet'
    });

const magacinNavigation = StackNavigator({
      preMagacin: { screen: MagacinDrawer },
      stock: { screen: StockScreen },
      depot: { screen: DepotScreen },
      warehouse: { screen: WarehouseScreen },
      box: { screen: BoxesScreen}

    },
    {
      initialRouteName: 'preMagacin'
    });

const kartotekaNavigation = StackNavigator({
      preKartoteka: { screen: KartotekaDrawer },
      product: { screen: ProductScreen },
      animal: { screen: AnimalScreen },
      subAnimal: { screen: SubAnimalScreen }

    },
    {
      initialRouteName: 'preKartoteka'
    });

const poslovniPartnerNavigation = StackNavigator({
      prePoslovniPartner: { screen: PoslovniPartnerDrawer },
      businessPartner: { screen: BusinessPartnerScreen }


    },
    {
      initialRouteName: 'prePoslovniPartner'
    });

const companyNavigation = StackNavigator({
      preCompany: { screen: CompanyDrawer },
      company: { screen: CompanyScreen },

    },
    {
      headerMode: 'none'
    },
    {
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


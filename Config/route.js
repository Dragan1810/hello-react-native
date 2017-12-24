import React from 'react';
import { DrawerNavigator,StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
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
import GovedaPKlanja from '../screens/Production/Goveda/Pklanja'
import GovedaAKlanja from '../screens/Production/Goveda/Aklanja'
import LambPKlanja from '../screens/Production/Lamb/Pklanja'
import LambAKlanja from '../screens/Production/Lamb/Aklanja'
import PigPKlanja from '../screens/Production/Pig/Pklanja'
import PigAKlanja from '../screens/Production/Pig/Aklanja'

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
  prePigKlanja: { screen: PigPKlanja },
  aktPigKlanja: { screen: PigAKlanja } // aktivna predhodna klanja toDO

},{
  headerMode:'none'
},
{
  initialRouteName: 'prePigScreen'
});

const GovedaNavigation = StackNavigator({
  preGovedaScreen: { screen: govedaDrawer },
  preGovedaKlanja: { screen: GovedaPKlanja },
  aktGovedaKlanja:{ screen: GovedaAKlanja } // aktivna predhodna klanja toDO

},{
  headerMode:'none'
},
{
  initialRouteName: 'preGovedaScreen'
});


const LambNavigation = StackNavigator({
  preLambScreen: { screen: lambDrawer },
  preLambKlanja: { screen: LambPKlanja },
  aktLambKlanja: { screen: LambAKlanja } // aktivna predhodna klanja toDO

},{
  headerMode:'none'
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
  headerMode:'none'
},{
  initialRouteName: 'preProduction'
});

const robniPrometNavigation = StackNavigator({
      preRobniPromet: { screen: DocumentsDrawer },
      inputNote: { screen: InputNoteScreen }

    },{
      headerMode:'none'
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

    },{
      headerMode:'none'
    },
    {
      initialRouteName: 'preMagacin'
    });

const kartotekaNavigation = StackNavigator({
      preKartoteka: { screen: KartotekaDrawer },
      product: { screen: ProductScreen },
      animal: { screen: AnimalScreen },
      subAnimal: { screen: SubAnimalScreen }

    },{
      headerMode:'none'
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


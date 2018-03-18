import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import InputNoteScreen from "../screens/Documents/InputNoteScreen";
import StockScreen from "../screens/Magacin/StockScreen";
import DepotScreen from "../screens/Magacin/DepotScreen";
import WarehouseScreen from "../screens/Magacin/WarehouseScreen";
import ProductScreen from "../screens/Kartoteka/ProductScreen";
import AnimalScreen from "../screens/Kartoteka/AnimalScreen";
import SubAnimalScreen from "../screens/Kartoteka/SubAnimalScreen";
import BusinessPartnerScreen from "../screens/PoslovniPartner/BusinessPartnerScreen";
import CompanyScreen from "../screens/Company/CompanyScreen";
import BoxesScreen from "../screens/Magacin/BoxesScreen";
import GovedaPKlanja from "../screens/Production/Goveda/Pklanja";
import GovedaAKlanja from "../screens/Production/Goveda/Aklanja";
import LambPKlanja from "../screens/Production/Lamb/Pklanja";
import LambAKlanja from "../screens/Production/Lamb/Aklanja";
import PigPKlanja from "../screens/Production/Pig/Pklanja";
import PigAKlanja from "../screens/Production/Pig/Aklanja";

import CompanyDrawer from "../screens/Company/CompanyDrawer";
import DocumentsDrawer from "../screens/Documents/DocumentsDrawer";
import KartotekaDrawer from "../screens/Kartoteka/KartotekaDrawer";
import MagacinDrawer from "../screens/Magacin/MagacinDrawer";
import ProductionDrawer from "../screens/Production/ProductionDrawer";
import PoslovniPartnerDrawer from "../screens/PoslovniPartner/PoslovniPartnerDrawer";
import govedaDrawer from "../screens/Production/Goveda/govedaDrawer";
import pigDrawer from "../screens/Production/Pig/pigDrawer";
import lambDrawer from "../screens/Production/Lamb/lambDrawer";

import Details from "../components/Grid";
import ArtikliDetaljiScreen from "../components/ArtikliDetalji";
import WarehouseArtikliScreen from "../components/WarehouseDetails";
import LinkScreen from "../screens/Links/LinkScreen";
import HRScreen from "../screens/HR/HR";

import Web from "../components/Web";

import HomeEnergoScreen from "../screens/Energo/HomeEnergo";
import ElinkScreen from "../screens/Energo/ELink";

import HomeDju2010Screen from "../screens/Dju2010/Home2010";
import DjLink2010Screen from "../screens/Dju2010/Links";

import HomePetScreen from "../screens/PetMB/HomeMB";
import PlinkScreen from "../screens/PetMB/Links";

import Skener from "../components/Skener";
import SkenerItem from "../components/SkenerItem";

import LagerSledjivost from "../screens/Magacin/LagerSledjivost";

import StockGrid from "../components/StockGrid";

import LoginScreen from "../components/Login";

import DocumentDrawer from "../screens/Documents/DocumentsDrawer";
import PrethodnePrijemScreen from "../screens/Documents/PredhodnePrijem";
import DanasnjePrijemScreen from "../screens/Documents/DanasnjePrijem";
import NalogZaPrijemScreen from "../screens/Documents/NalogZaPrijem";

const PigNavigation = StackNavigator(
  {
    prePigScreen: { screen: pigDrawer },
    prePigKlanja: { screen: PigPKlanja },
    aktPigKlanja: { screen: PigAKlanja },
    details: { screen: Details } // aktivna predhodna klanja toDO
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "prePigScreen"
  }
);

const GovedaNavigation = StackNavigator(
  {
    preGovedaScreen: { screen: govedaDrawer },
    preGovedaKlanja: { screen: GovedaPKlanja },
    aktGovedaKlanja: { screen: GovedaAKlanja }
    //details: { screen: Details }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "preGovedaScreen"
  }
);

const LambNavigation = StackNavigator(
  {
    preLambScreen: { screen: lambDrawer },
    preLambKlanja: { screen: LambPKlanja },
    aktLambKlanja: { screen: LambAKlanja }
    //details: { screen: Details }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "preLambScreen"
  }
);

const productionNavigation = StackNavigator(
  {
    // primer navigacije
    preProduction: { screen: ProductionDrawer }, // routa : { ime screena gde vodi}
    goveda: { screen: GovedaNavigation },
    lamb: { screen: LambNavigation },
    pig: { screen: PigNavigation }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "preProduction"
  }
);

const prijemNavigation = StackNavigator(
  {
    // primer navigacije
    prePrijem: { screen: DocumentDrawer }, // routa : { ime screena gde vodi}
    naloziZaPrijem: { screen: NalogZaPrijemScreen },
    danasnji: { screen: DanasnjePrijemScreen },
    prethodni: { screen: PrethodnePrijemScreen },
    pretraga: { screen: InputNoteScreen }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "prePrijem"
  }
);

const magacinNavigation = StackNavigator(
  {
    preMagacin: { screen: MagacinDrawer },
    stock: { screen: StockGrid }, //zamenjeno sa Stock Screenom to be fixed.... ProductScreen/Stock Grid
    depot: { screen: DepotScreen },
    warehouse: { screen: WarehouseScreen },
    warehouse2: { screen: LagerSledjivost },
    box: { screen: BoxesScreen },
    detailsArtikli: { screen: ArtikliDetaljiScreen },
    warehouseArtikli: { screen: WarehouseArtikliScreen }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "preMagacin"
  }
);

const kartotekaNavigation = StackNavigator(
  {
    preKartoteka: { screen: KartotekaDrawer },
    product: { screen: StockScreen },
    animal: { screen: AnimalScreen },
    subAnimal: { screen: SubAnimalScreen }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "preKartoteka"
  }
);

const poslovniPartnerNavigation = StackNavigator(
  {
    prePoslovniPartner: { screen: PoslovniPartnerDrawer },
    businessPartner: { screen: BusinessPartnerScreen }
  },
  {
    initialRouteName: "prePoslovniPartner"
  }
);

const LinkNav = StackNavigator(
  {
    LinkScreen: { screen: LinkScreen },
    web: { screen: Web }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "LinkScreen"
  }
);

const EnergoNav = StackNavigator(
  {
    HomeEnergoScreen: { screen: HomeEnergoScreen },
    Elinkovi: { screen: ElinkScreen },
    web: { screen: Web }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "HomeEnergoScreen"
  }
);

const PetMBNav = StackNavigator(
  {
    HomePet: { screen: HomePetScreen },
    Plinkovi: { screen: PlinkScreen },
    web: { screen: Web }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "HomePet"
  }
);

const Dju2010Nav = StackNavigator(
  {
    HomeDju2010Screen: { screen: HomeDju2010Screen },
    Djlinkovi: { screen: DjLink2010Screen },
    web: { screen: Web }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "HomeDju2010Screen"
  }
);

const MainNavigation = StackNavigator(
  {
    login: { screen: LoginScreen },
    preCompany: { screen: CompanyDrawer }, //main navigacija u koju su ubacene sve sub navigacije
    Home: { screen: HomeScreen },
    Magacin: { screen: magacinNavigation },
    Production: { screen: productionNavigation },
    RobniPromet: { screen: prijemNavigation },
    Kartoteka: { screen: kartotekaNavigation },
    PoslovniPartner: { screen: poslovniPartnerNavigation },
    Linkovi: { screen: LinkNav },
    HR: { screen: HRScreen },
    Scan: { screen: Skener },
    ScanItem: { screen: SkenerItem },
    HomeEnergo: { screen: EnergoNav },
    Dju2010: { screen: Dju2010Nav },
    PetMB: { screen: PetMBNav }

    // dodati drawer sa strane podesavanje strana
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "login"
  }
);

export default MainNavigation;

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
import CompanyScreen from "../screens/Company/CompanyScreen";
import BoxesScreen from "../screens/Magacin/BoxesScreen";
import GovedaPKlanja from "../screens/Production/Goveda/Pklanja";
import GovedaAKlanja from "../screens/Production/Goveda/Aklanja";
import LambPKlanja from "../screens/Production/Lamb/Pklanja";
import LambAKlanja from "../screens/Production/Lamb/Aklanja";
import PigPKlanja from "../screens/Production/Pig/Pklanja";
import PigAKlanja from "../screens/Production/Pig/Aklanja";
import DanasnjaKlanjaScreen from "../screens/Production/DanasnjaKlanja";
import prethodnaKlanjaScreen from "../screens/Production/PrethodnaKlanja";
import DetaljiKlanjaScreen from "../screens/Production/DetaljiKlanja";

import CompanyDrawer from "../screens/Company/CompanyDrawer";
import DocumentsDrawer from "../screens/Documents/DocumentsDrawer";
import KartotekaDrawer from "../screens/Kartoteka/KartotekaDrawer";
import MagacinDrawer from "../screens/Magacin/MagacinDrawer";
import ProductionDrawer from "../screens/Production/ProductionDrawer";
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
import SubTypePrijemScreen from "../screens/Documents/SubTypePrijem";
import InputNoteSimpleScreen from "../screens/Documents/InputNoteScreen";
import PretragaScreen from "../screens/Documents/Pretraga";
import PretragaShowScreen from "../screens/Documents/PretragaShow";

import ArtikliDetaljiDetaljiScreen from "../components/ArtikliDetaljiDetalji";

const PigNavigation = StackNavigator(
  {
    prePigScreen: pigDrawer,
    prePigKlanja: PigPKlanja,
    aktPigKlanja: PigAKlanja,
    details: Details // aktivna predhodna klanja toDO
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
    preGovedaScreen: govedaDrawer,
    preGovedaKlanja: GovedaPKlanja,
    aktGovedaKlanja: GovedaAKlanja
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
    preLambScreen: lambDrawer,
    preLambKlanja: LambPKlanja,
    aktLambKlanja: LambAKlanja
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
    preProduction: ProductionDrawer, // routa : { ime screena gde vodi}
    goveda: GovedaNavigation,
    lamb: LambNavigation,
    pig: PigNavigation,
    danasnjaKlanja: DanasnjaKlanjaScreen,
    prethodnaKlanja: prethodnaKlanjaScreen,
    detaljiKlanja: DetaljiKlanjaScreen,
    web: Web
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
    prePrijem: DocumentDrawer,
    naloziZaPrijem: NalogZaPrijemScreen,
    danasnji: DanasnjePrijemScreen,
    prethodni: PrethodnePrijemScreen,
    pretraga: PretragaScreen,
    showPretraga: PretragaShowScreen,
    subGroup: SubTypePrijemScreen,
    simplePrijem: InputNoteSimpleScreen
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
    preMagacin: MagacinDrawer,
    stock: StockGrid, //zamenjeno sa Stock Screenom to be fixed.... ProductScreen/Stock Grid
    depot: DepotScreen,
    warehouse: WarehouseScreen,
    warehouse2: LagerSledjivost,
    box: BoxesScreen,
    detailsArtikli: ArtikliDetaljiScreen,
    LagerDetaljiDetalji: ArtikliDetaljiDetaljiScreen,
    warehouseArtikli: WarehouseArtikliScreen
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
    preKartoteka: KartotekaDrawer,
    product: StockScreen,
    animal: AnimalScreen,
    subAnimal: SubAnimalScreen
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "preKartoteka"
  }
);

const LinkNav = StackNavigator(
  {
    LinkScreen: LinkScreen,
    web: Web
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
    HomeEnergoScreen: HomeEnergoScreen,
    Elinkovi: ElinkScreen,
    web: Web
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
    HomePet: HomePetScreen,
    Plinkovi: PlinkScreen,
    web: Web
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
    HomeDju2010Screen: HomeDju2010Screen,
    Djlinkovi: DjLink2010Screen,
    web: Web
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
    preCompany: CompanyDrawer, //main navigacija u koju su ubacene sve sub navigacije
    login: LoginScreen,
    Home: HomeScreen,
    Magacin: magacinNavigation,
    Production: productionNavigation,
    RobniPromet: prijemNavigation,
    Kartoteka: kartotekaNavigation,
    Linkovi: LinkNav,
    HR: HRScreen,
    Scan: Skener,
    ScanItem: SkenerItem,
    HomeEnergo: EnergoNav,
    Dju2010: Dju2010Nav,
    PetMB: PetMBNav

    // dodati drawer sa strane podesavanje strana
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "preCompany"
  }
);

export default MainNavigation;

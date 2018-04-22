import { Icon } from "./icons";

export const MainRoutes = [
  {
    id: "RobniPromet",
    title: "Prijem Depo",
    icon: require("../assets/png/truck.png")
  },
  {
    id: "Production",
    title: "Klanje",
    icon: Icon.knife
  },
  {
    id: "Magacin",
    title: "Magacin",
    icon: Icon.warehouse
  },
  {
    id: "Linkovi",
    title: "Korisni Linkovi",
    icon: Icon.organization
  },
  {
    id: "Kartoteka",
    title: "Kartoteka",
    icon: Icon.lager
  },
  {
    id: "Kartoteka",
    title: "Ljudski Resursi",
    icon: Icon.organization
  }
];

export const LinkRoutes = [
  {
    id: "web",
    title: "Trlic",
    icon: require("../assets/linkovi/Trlic-Ub.png"),
    uri: "http://trlic.com/cenovnik/"
  },
  {
    id: "web",
    title: "Rossel khoznadzor",
    icon: require("../assets/linkovi/1.jpg"),
    uri:
      "http://www.rosselkhoznadzor.ru/fsvps/importExport/serbia/enterprises.html?product=2&productType=1&_language=en"
  },
  {
    id: "web",
    title: "Kursna Lista",
    icon: require("../assets/linkovi/2.png"),
    uri: "https://www.kursna-lista.com/kursna-lista-nbs"
  },
  {
    id: "web",
    title: "Pig333",
    icon: require("../assets/linkovi/3.jpg"),
    uri: "https://www.pig333.com/markets_and_prices/"
  },
  {
    id: "web",
    title: "Vet.minpolj",
    icon: require("../assets/linkovi/Min_polj_50x50.png"),
    uri: "http://www.vet.minpolj.gov.rs/"
  },
  {
    id: "web",
    title: "Matijevic",
    icon: require("../assets/linkovi/IM_Matijevic_logo_2_50x35.png"),
    uri: "https://matijevic.rs/akcije/"
  },
  {
    id: "web",
    title: "Lidl Hrvatska",
    icon: require("../assets/linkovi/lidl.jpg"),
    uri: "https://www.lidl.hr/hr/index.htm"
  },
  {
    id: "web",
    title: "Lidl Srbija",
    icon: require("../assets/linkovi/lidl.jpg"),
    uri: "http://www.lidl.rs/sr/index.htm"
  },
  {
    id: "web",
    title: "Lidl Madjarska",
    icon: require("../assets/linkovi/lidl.jpg"),
    uri: "https://www.lidl.hu/hu/index.htm"
  }
];

export const ProizvodnjaRoutes = [
  {
    id: "danasnjaKlanja",
    title: "Danasnja Klanja",
    icon: Icon.knife
  },
  {
    id: "prethodnaKlanja",
    title: "Predhodna Klanja",
    icon: Icon.knife
  },
  {
    id: "pig",
    title: "Trenutna Klanja",
    icon: Icon.knife
  }
];

export const PrijemniceRoutes = [
  {
    id: "naloziZaPrijem",
    title: "Nalozi Prijem",
    icon: require("../assets/Icons/010-notepad.png")
  },
  {
    id: "danasnji",
    title: "Danasnje",
    icon: require("../assets/Icons/004-all.png")
  },
  {
    id: "prethodni",
    title: "Prethodne",
    icon: require("../assets/Icons/004-all.png")
  },
  {
    id: "pretraga",
    title: "Pretraga",
    icon: require("../assets/Icons/004-all.png")
  }
];

export const HRRoutes = [
  {
    id: "goveda",
    title: "Klanja",
    icon: Icon.knife
  }
];

export const GovedaRoutes = [
  {
    id: "preGovedaKlanja",
    title: "Predhodna klanja",
    icon: require("../assets/Icons/pred.png")
  },
  {
    id: "aktGovedaKlanja",
    title: "Aktivna klanja",
    icon: require("../assets/Icons/aktivnok.png")
  }
];

export const LambRoutes = [
  {
    id: "preLambKlanja",
    title: "Predhodna Klanja",
    icon: require("../assets/Icons/pred.png")
  },
  {
    id: "aktLambKlanja",
    title: "Aktivna Klanja",
    icon: require("../assets/Icons/aktivnok.png")
  }
];

export const PigRoutes = [
  {
    id: "aktPigKlanja",
    title: "Trenutne Svinje",
    icon: require("../assets/Icons/pig.png")
  },
  {
    id: "prePigKlanja",
    title: "Trenutna Goveda",
    icon: require("../assets/Icons/cow.png")
  },
  {
    id: "aktLambKlanja",
    title: "Trenutni Jaganjci",
    icon: require("../assets/Icons/ram.png")
  }
];

export const KartotekaRoutes = [
  {
    id: "product",
    title: "Artikli",
    icon: require("../assets/Icons/steak.png")
  },
  {
    id: "animal",
    title: "Zivotinje",
    icon: require("../assets/png/032-cow.png")
  }
];

export const MagacinRoutes = [
  {
    id: "stock",
    title: "Ukupni Lager",
    icon: require("../assets/Icons/warehouse.png")
  },
  {
    id: "warehouse2",
    title: "Lager Sledljivost",
    icon: require("../assets/Icons/warehouse.png")
  },
  {
    id: "warehouse",
    title: "Skladista",
    icon: require("../assets/png/004-warehouse-1.png")
  },
  {
    id: "depot",
    title: "Depoi",
    icon: require("../assets/png/042-barn.png")
  },
  {
    id: "Scan",
    title: "Sledljivost Barcod",
    icon: require("../assets/Icons/barcod.png")
  }
];

const logo1 = require("../assets/logo2.png");
const logo2 = require("../assets/petmb.jpg");
const logo3 = require("../assets/dj2010.png");
const logo4 = require("../assets/viber_image.jpg");

export const CompanyListConfig = [
  { img: logo1, btn_list: [{ name: "Proizvodnja", route: "Home" }] },
  { img: logo2, btn_list: [{ name: "Proizvodnja", route: "PetMB" }] },
  { img: logo3, btn_list: [{ name: "Proizvodnja", route: "Dju2010" }] },
  { img: logo4, btn_list: [{ name: "Proizvodnja", route: "HomeEnergo" }] }
];

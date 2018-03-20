import { Icon } from "./icons";

export const MainRoutes = [
  {
    id: "Plinkovi",
    title: "Korisni Linkovi",
    icon: Icon.organization
  }
];

export const LinkRoutes = [
  { id: "web", title: "Farmia", icon: Icon.knife, uri: "https://farmia.rs/" },
  {
    id: "web",
    title: "Deheus",
    icon: require("../assets/linkovi/deheus.png"),
    uri: "https://www.deheus.rs/"
  },
  {
    id: "web",
    title: "Miavit",
    icon: Icon.knife,
    uri: "http://www.miavit.de/en/"
  },
  {
    id: "web",
    title: "AgroKlub",
    icon: Icon.knife,
    uri: "https://www.agroklub.rs/poljoprivredne-vesti/"
  },
  {
    id: "web",
    title: "Fendt",
    icon: Icon.knife,
    uri: "https://www.fendt.com/int/default.html"
  },
  {
    id: "web",
    title: "Knez Petrol",
    icon: require("../assets/linkovi/knez.jpg"),
    uri: "http://www.knezpetrol.com/"
  },
  {
    id: "web",
    title: "Delta Agrar",
    icon: require("../assets/linkovi/knez.jpg"),
    uri: "http://www.deltaagrar.rs/"
  }
];

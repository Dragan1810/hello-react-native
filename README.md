# ERPMobile Dokumentacija

## Instalacija

* Instalirati [Node.js](https://nodejs.org/en/) >8 i npm > 5 ( moze i [yarn](https://yarnpkg.com/lang/en/docs/install/) umesto npm-a)
* Instalirati [Expo XDE](https://github.com/expo/xde/releases) ili preko terminala

```bash
 yarn global add exp
```

## Pokretanje

```bash
git clone https://github.com/zdravko83/ERPMobile.git
cd ERPMobile
yarn
exp start (ili preko expo XDE)
```

## Struktura File-ova

```
|
|-- App.js(root) stoji samo Main Navigacija
|-- Screens
|-- Assets
|-- Config
    |--Routes.js
|-- Helpers
|-- Styled-Components
|-- Resuable-Components
```

### Navigacija

Koristi se React-Navigation dokumentacija [ovde](https://reactnavigation.org/docs/getting-started.html)

```javascript
const MainNavigation = StackNavigator(
  {
    preCompany: { screen: CompanyDrawer },
    login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Magacin: { screen: magacinNavigation },
    Production: { screen: productionNavigation },
    RobniPromet: { screen: prijemNavigation },
    Kartoteka: { screen: kartotekaNavigation }
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "preCompany"
  }
);

export default MainNavigation;
```

### Stilizovanje

Koristi se Styled-Components dokumentacija [ovde](https://www.styled-components.com/docs/basics#react-native)

```javascript
export const WrapperHeader = styled.View`
  background-color: #009688;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Constants.statusBarHeight + 5}px 12px 15px 12px;
`;
```

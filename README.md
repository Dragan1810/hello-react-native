# ERPMobile Dokumentacija

## Instalacija

* Instalirati [Node.js](https://nodejs.org/en/) >8 i npm > 5 ( moze i [yarn](https://yarnpkg.com/lang/en/docs/install/) umesto npm-a)
* Instalirati [Expo XDE](https://github.com/expo/xde/releases) ili preko terminala

```bash
 yarn global add exp
```

## Tutorial 
[![CS50 React Native Predavanja](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=X52b-8y2Hf4&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR)

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
    imeRute: Ekran koji se prikazuje ili navigacija
    preCompany: CompanyDrawer,
    login: LoginScreen,
    Home: HomeScreen,
    Magacin: magacinNavigation,
    Production: productionNavigation,
    RobniPromet: prijemNavigation,
    Kartoteka: kartotekaNavigation
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

```javascript
import { View, Text, StyleSheet } from 'react-native'

<View style={styles.pozadina}>
  <Text style={{ color: 'blue', fontSize: 18 }}>Hello World</Text>
</View>

const styles = StyleSheet.create({
 pozadina: {
   width: 100,
   height: 100,
   backgroundColor: 'green'
 }
})
```

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

### Reusable - Komponente

```
|-- CompanySlot.js
|-- Header.js
|-- ListItems.js
|-- GridList.js
|-- HOCbasic.js
```

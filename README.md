# ERPMobile Dokumentacija
### To-Do
* Redux zbog Post Formi
* Prebaciti HOC u Render prop i probati dinamicke rute
* Error Parent Componenta + RenderProp

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

CSS u JS razlike?

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

Takodje moze da se koristi Styled-Components. dokumentacija [ovde](https://www.styled-components.com/docs/basics#react-native)

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

* Header Komponenta

  ```javascript
  <Header
    title={"naziv trenutne strane"}
    navigate={navigate} // prosledjuje se navigate funkcija iz navigacije
    goBack={goBack} // prosledjena funkicja
  />
  ```

* GridLista Komponenta

GridLista komponenta prima kao prop Array sa informacija iz config foldera, koristi se za prikazivanje Grid Ikonica

```javascript
import { RuteProizvodnje } from '@config/index'

<GridLista
  MainRoutes={RutePrizvodnje}
  navigate={navigate} // prosledjuje se navigate funkcija iz navigacije
/>
```

* ListItem Komponenta

ListItem komponenta se koristi za prikazivanje svih tabela u aplikaciji npr: prethodni prijem

```javascript
import Item from '@reusable-components/ListItem'

<FlatList
    data={data}
    renderItem={({ item }) => (
      <Item
        item={item}
        routeData={{
          route: "detaljiKlanja",
          routeUrl: `http://212.200.54.246:5001/api/SlaughterForMobile/GetSlaughter?CompanyId=1&id=${
            item.Id
          }&type=${item.Type}`,
          name: item.Item
        }}
      />
    )}
    keyExtractor={(item, i) => (item.Id ? `${item.Id}` : `item-${i}`)}
    refreshing={data.refreshing || false}
    onRefresh={handleRefresh}
    onEndReached={handleLoadMore || null}
    onEndReachedThreshold={0.5}
  />
```

* HOC(mozda refactoring u Render prop) Komponenta

HOC funkcija prima komponentu, ime komponente, i URL sa koga treba da se pokupe podaci.

ime i url nisu obavezni, ako se izuzmu, funkcija ce pokusati da uzme te podatke iz same komponente(kroz navigacioni prop)

```javascript
import HOC from "@reusable-components/HOCbasic";

const Output = HOC(DanasnjaKlanja, "Danasnja Klanja", URL);
```

import React from "react";
import { Text, View, FlatList } from "react-native";
import { Wrapper } from "../../styled-components/Wrapper";
import { format } from "date-fns";
import Header from "../../reusable-components/Header";
import HOC from "../../reusable-components/HOCbasic";
import Item from "../../reusable-components/ListItem";

let date = format(Date.now(), "YYYYMMDDHHmmss");

let date0 = `20180317000000`;

const dateFrom = `&dateFrom=${date}`;
const dateTo = `&dateTo=${date}`;
const BP = `&businessPartnerId=0`;
const animalSubTypeId = `&animalSubTypeId=0`;
const URLmini = `http://212.200.54.246:5001/api/SlaughterForMobile/GetSlaughtersForMobile?CompanyId=1`;
const URL = `${URLmini}&currentPage=1`;

const PredhodnaKlanja = ({
  data,
  title,
  handleRefresh,
  handleLoadMore,
  navigation: { goBack, navigate }
}) => (
  <Wrapper>
    <Header title={title} goBack={goBack} navigate={navigate} />
    <FlatList
      style={{ width: "100%" }}
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
  </Wrapper>
);

const Output = HOC(PredhodnaKlanja, "Predhodna Klanja", URL);
export default Output;

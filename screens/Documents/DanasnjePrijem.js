import React from "react";
import { Text, View, FlatList } from "react-native";
import { Wrapper } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import ListItems from "../../components/InputNoteItem";
import { format } from "date-fns";
import Header from "../../reusable-components/Header";
import HOC from "../../reusable-components/HOCbasic";
import Item from "../../reusable-components/ListItem";

let date = format(Date.now(), "YYYYMMDDHHmmss");

const dateFrom = `&dateFrom=${date}`;
const dateTo = `&dateTo=${date}`;
const BP = `&businessPartnerId=0`;
const animalSubTypeId = `&animalSubTypeId=0`;
const URLmini = `http://212.200.54.246:5001/api/InputNote/GetInputNotesForGroupedReportMobile?companyId=1`;
const URL = `${URLmini}${dateFrom}${dateTo}${BP}${animalSubTypeId}`;

const DanasnjiPrijem = ({
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
            route: "subGroup",
            routeUrl: `http://212.200.54.246:5001/api/InputNote/GetInputNotesForSubGroupedReportMobile?companyId=1${dateFrom}${dateTo}&businessPartnerId=0&animalSubTypeId=`,
            prop: "AnimalSubTypeId",
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

const Output = HOC(DanasnjiPrijem, "Danasnji Prijem", URL);
export default Output;

import React from "react";
import { Text, View, FlatList } from "react-native";
import { Wrapper } from "../../styled-components/Wrapper";
import Activity from "../../components/ActivityIndicator";
import Header from "../../reusable-components/Header";
import HOC from "../../reusable-components/HOCbasic";
import Item from "../../reusable-components/ListItem";

const SubTypePrijem = ({
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
            route: "simplePrijem",
            routeUrl: `http://212.200.54.246:5001/api/InputNote/GetInputNoteForMobile?Id=`,
            prop: "InputNoteId",
            name: null
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

const Output = HOC(SubTypePrijem, "Ovo iz Route-name");
export default Output;

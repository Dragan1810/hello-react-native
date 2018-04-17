import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Wrapper } from "../../styled-components/Wrapper";
import { data } from "../../helpers/Data";
import Activity from "../../components/ActivityIndicator";
import Header from "../../reusable-components/Header";
import Item from "../../reusable-components/ListItem";
import HOC from "../../reusable-components/HOCbasic";

const NalogZaPrijem = ({
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
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => `${item.Id}`}
      refreshing={data.refreshing || false}
      onRefresh={handleRefresh}
      onEndReached={handleLoadMore || null}
      onEndReachedThreshold={0.5}
    />
  </Wrapper>
);

const Output = HOC(
  NalogZaPrijem,
  "Nalog Za Prijem",
  data.documents.nalogZaPrijem
);
export default Output;

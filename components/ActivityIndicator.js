import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Header from "../reusable-components/Header";

const Activity = () => (
  <View style={styles.indicator}>
    <Header title={"Loading"} />
    <ActivityIndicator
      animating={true}
      size="large"
      color="#bc2b78"
      style={{
        opacity: 1,
        paddingTop: 30,
        marginTop: 30
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  indicator: {
    flex: 1
  }
});

export default Activity;

import React from "react";
import { Icon } from "react-native-elements";
import { Alert, AsyncStorage } from "react-native";
import {
  Wrapper,
  WrapperHeader,
  TitleText
} from "../styled-components/Wrapper";

const Header = ({ title, goBack, navigate }) => (
  <WrapperHeader>
    {title === "Glavni Meni" ? (
      <Icon
        name="menu"
        color="#fff"
        onPress={() =>
          Alert.alert("Logout", "Dali ste sigurni?", [
            {
              text: "Cancel"
            },
            {
              text: "OK",
              onPress: async () => {
                await AsyncStorage.removeItem("user");
                navigate("login"); //need fix
              }
            }
          ])
        }
      />
    ) : (
      <Icon name="arrow-back" color="#fff" onPress={() => goBack(null)} />
    )}
    <TitleText>{title}</TitleText>
    {title === "Glavni Meni" ? (
      <Icon name="home" color="#fff" onPress={() => goBack(null)} />
    ) : (
      <Icon name="home" color="#fff" onPress={() => navigate("preCompany")} />
    )}
  </WrapperHeader>
);

export default Header;

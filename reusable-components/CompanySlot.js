import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  WebView,
  Image,
  StyleSheet
} from "react-native";
import {
  WrapperHeader,
  TitleText,
  WrapperHeaderCentar
} from "../styled-components/Wrapper";
import { Card, ListItem, Button } from "react-native-elements";
import Header from "./Header";
import styled from "styled-components/native";
import { withNavigation } from "react-navigation";

import { Consumer } from "../screens/Company/CompanyDrawer";

const ImgWrapper = styled.View`
  height: 210;
  max-width: 210;
  flex: 3;
  padding: 0;
  border-top-left-radius: ${props => (props.Left ? "0" : "100")};
  border-bottom-left-radius: ${props => (props.Left ? "0" : "100")};
  border-top-right-radius: ${props => (props.Left ? "100" : "0")};
  border-bottom-right-radius: ${props => (props.Left ? "100" : "0")};
  overflow: hidden;
`;

const MainContainer = styled.View`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: row;
`;

const BtnDiv = styled.View`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  margin: 0 5px 0 5px;
`;

const CompanyImg = styled.Image`
  height: 210;
  max-width: 210;
  padding: 0;
  margin: 0;
  border-top-left-radius: ${props => (props.Left ? "0" : "100")};
  border-bottom-left-radius: ${props => (props.Left ? "0" : "100")};
  border-top-right-radius: ${props => (props.Left ? "100" : "0")};
  border-bottom-right-radius: ${props => (props.Left ? "100" : "0")};
`;

class CompanySlot extends Component {
  flip(item, i) {
    const flip = i % 2 === 0;
    const img = flip ? (
      <ImgWrapper Left style={styles.shadow}>
        <CompanyImg Left source={item.img} />
      </ImgWrapper>
    ) : (
      <ImgWrapper style={styles.shadow}>
        <CompanyImg source={item.img} />
      </ImgWrapper>
    );
    const btn = (
      <BtnDiv>
        <ListDugme list={item.btn_list} />
      </BtnDiv>
    );
    firmLista = flip ? [img, btn] : [btn, img];
    return firmLista;
  }
  render() {
    return (
      <Fragment>
        <Consumer>
          {({ state }) =>
            state.map((item, i) => (
              <MainContainer key={i}>
                {this.flip(item, i).map((item, i) => (
                  <Fragment key={i}>{item}</Fragment>
                ))}
              </MainContainer>
            ))
          }
        </Consumer>
      </Fragment>
    );
  }
}

const ListDugme = ({ list }) => {
  return list.map((item, i) => (
    <Dugme key={i} name={item.name} route={item.route} />
  ));
};
const Dugme = ({ name, route }) => {
  return (
    <Consumer>
      {({ navigate }) => (
        <Button
          containerStyle={styles.btn}
          onPress={() => navigate(route)}
          buttonStyle={{
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "#009688",
            width: "80%"
          }}
          title={name}
          disabled={false}
        />
      )}
    </Consumer>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 0,
    marginBottom: 10,
    flexDirection: "row"
  },
  shadow: {
    backgroundColor: "#2E9298",
    borderRadius: 14,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 4,
      height: 6
    },
    shadowRadius: 7,
    shadowOpacity: 1.0,
    elevation: 4
  }
});

export default CompanySlot;

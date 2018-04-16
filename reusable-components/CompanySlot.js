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
  border-top-right-radius: 50;
  border-bottom-right-radius: 50;
  flex: 3;
`;

const MainContainer = styled.View`
  display: flex;
  padding-top: 0;
  flex-direction: row;
`;

const BtnDiv = styled.View`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const CompanyImg = styled.Image`
  width: 200;
  height: 200;
  border-top-left-radius: ${props => (props.Left ? "0" : "100")};
  border-bottom-left-radius: ${props => (props.Left ? "0" : "100")};
  border-top-right-radius: ${props => (props.Left ? "100" : "0")};
  border-bottom-right-radius: ${props => (props.Left ? "100" : "0")};
`;

class CompanySlot extends Component {
  constructor() {
    super();
  }
  flip(item, i) {
    const img =
      i % 2 === 0 ? (
        <ImgWrapper>
          <CompanyImg Left source={item.img} />
        </ImgWrapper>
      ) : (
        <ImgWrapper>
          <CompanyImg source={item.img} />
        </ImgWrapper>
      );
    const btn = (
      <BtnDiv>
        <ListDugme
          list={item.btn_list}
          navigate={this.props.navigation.navigate}
        />
      </BtnDiv>
    );
    return i % 2 === 0 ? [img, btn] : [btn, img];
  }
  render() {
    return (
      <Fragment>
        <Consumer>
          {data =>
            data.map((item, i) => (
              <MainContainer key={i}>{this.flip(item, i)}</MainContainer>
            ))
          }
        </Consumer>
      </Fragment>
    );
  }
}

const ListDugme = ({ list, navigate }) => {
  return list.map((item, i) => (
    <Dugme key={i} name={item.name} route={item.route} navigate={navigate} />
  ));
};
const Dugme = ({ name, route, navigate }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 0,
    marginBottom: 10,
    flexDirection: "row"
  }
});

export default withNavigation(CompanySlot);

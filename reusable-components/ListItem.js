import React from "react";
import { ListItem } from "react-native-elements";
import { ImgPicker } from "../helpers/index";
import { withNavigation } from "react-navigation";

const Item = ({ item, navigation: { navigate }, route, routeUrl }) => {
  let img = ImgPicker(item);

  return (
    <ListItem
      leftAvatar={{ rounded: true, source: img }}
      key={item.Id}
      title={item.Item}
      subtitle={item.Description}
      onPress={() =>
        navigate(route, {
          url: `${routeUrl}${item.Id}`
        })
      }
      chevron
    />
  );
};

export default withNavigation(Item);

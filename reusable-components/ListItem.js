import React from "react";
import { ListItem } from "react-native-elements";
import { ImgPicker } from "../helpers/index";
import { withNavigation } from "react-navigation";

const Item = ({ item, navigation: { navigate }, routeData }) => {
  let img = ImgPicker(item);

  const Next = ({ route, routeUrl, prop = "Id" }) => {
    if (!!route) {
      return null;
    }
    return () => navigate(route, { url: `${routeUrl}${item[prop]}` });
  };

  // chevron logic
  return (
    <ListItem
      leftAvatar={{ rounded: true, source: img }}
      key={item.Id}
      title={item.Item}
      subtitle={item.Description}
      onPress={Next(routeData)}
      chevron
    />
  );
};

export default withNavigation(Item);

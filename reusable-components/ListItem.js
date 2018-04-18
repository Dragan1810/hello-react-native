import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { ImgPicker } from "../helpers/index";
import { withNavigation } from "react-navigation";

const Item = ({ item, navigation: { navigate }, routeData }) => {
  let img = ImgPicker(item);

  const Next = ({ route, routeUrl, prop = "Id", name }) => {
    return () => navigate(route, { url: `${routeUrl}${item[prop]}`, name });
  };

  const Action = !!routeData ? Next(routeData) : null;
  /*
  <Icon
          name="play-circle-outline"
          containerStyle={{ margin: 0, padding: 0 }}
          color="#517fa4"
          size={32}
          iconStyle={{ padding: 0, margin: 0 }}
        />
  */

  // chevron logic
  return (
    <ListItem
      leftAvatar={{ rounded: false, source: img }}
      key={item.Id}
      title={item.Item}
      titleStyle={{ backgroundColor: "lightgrey" }}
      subtitle={item.Description}
      subtitleStyle={{ backgroundColor: "white" }}
      onPress={Action}
      bottomDivider={true}
    />
  );
};

export default withNavigation(Item);

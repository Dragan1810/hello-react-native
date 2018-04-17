import React from "react";
import { ListItem } from "react-native-elements";
import { ImgPicker } from "../helpers/index";
import { withNavigation } from "react-navigation";

const Item = ({ item, navigation: { navigate }, route = "simplePrijem" }) => {
  let img = ImgPicker(item);
  return (
    <ListItem
      leftAvatar={{ rounded: true, source: img }}
      key={item.Id}
      title={item.Item}
      subtitle={item.Description}
      onPress={() =>
        navigate(route, {
          url: `http://212.200.54.246:5001/api/InputNote/GetInputNoteForMobile?Id=${
            item.Id
          }`
        })
      }
      chevron
    />
  );
};

export default withNavigation(Item);

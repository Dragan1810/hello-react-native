import React from "react";
import { ListItem } from "react-native-elements";
import { ImgPicker } from "../helpers/index";

const Item = ({ item }) => {
  let img = ImgPicker(item);
  return (
    <ListItem
      roundAvatar
      avatar={img}
      key={item.Id}
      title={item.Item}
      subtitle={item.Description}
      hideChevron={true}
    />
  );
};

export default Item;

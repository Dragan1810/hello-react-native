export async function getData(Uri) {
  try {
    let response = await fetch(Uri);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export function filterData(data, searchItem) {
  return data.filter(item => {
    let keys = Object.keys(item);
    for (let i = 0; i < keys.length; i++) {
      if (
        item[keys[i]] !== null &&
        item[keys[i]]
          .toString()
          .toLowerCase()
          .includes(searchItem.toLowerCase())
      ) {
        return item;
      }
    }
  });
}

export function newFilterData(data, searchItem) {
  return data.filter(item => JSON.stringify(item).indexOf(searchItem) !== -1);
}

export const ImgPicker = item => {
  let img;
  switch (item.Image.split(".")[0]) {
    case "cow":
      img = require("../assets/Icons/cow2.png");
      break;
    case "pig":
      img = require("../assets/Icons/pig2.png");
      break;
    case "lamb":
      img = require("../assets/Icons/lamb2.png");
      break;
    case "all":
      img = require("../assets/Icons/004-all.png");
      break;
    case "meat":
      img = require("../assets/Icons/steak.png");
      break;
    case "farmer":
      img = require("../assets/Icons/farmer.png");
  }
  return img;
};

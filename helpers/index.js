
export async function getData(Uri) {
    try {
        let response = await fetch(Uri);
        let json = await response.json();
        return json;
      }
      catch(error) {
        console.error(error);
      }
    }

export function filterData(data, searchItem) {
  return data.filter(item => {
    let keys = Object.keys(item);
    for (let i = 0; i < keys.length; i++) {
      if(item[keys[i]] !==null && item[keys[i]].toString().toLowerCase().includes(searchItem.toLowerCase())){return item;}
    }
  });
}

export function newFilterData(data, searchItem) {
  return data.filter(item => JSON.stringify(item).indexOf(searchItem)!== -1)
}
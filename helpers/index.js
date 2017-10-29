
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

/*

export function FilterData(data, searchItem) {
  return data.filter(item => {
    let keys = Object.keys(item);
    for (let i = 0; i < keys.length; i++) {
      return item[keys[i]].includes(searchItem) ? item : '';
    }
  });
}

*/

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

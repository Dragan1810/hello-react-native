

export async function getData() {
    try {
        let response = await fetch('http://46.101.103.32/api/Company/GetCompanies');
        let json = await response.json();
        return json;
      }
      catch(error) {
        console.error(error);
      }
    }

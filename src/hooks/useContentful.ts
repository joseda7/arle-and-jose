import { createClient } from "contentful"

const useContentful = () => {

    function sortByName( a:any, b:any ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    }
  
    // objs.sort( compare );

    const client = createClient({
        space: import.meta.env.VITE_CONT_SID,
        accessToken: import.meta.env.VITE_CONT_AT,
        host: import.meta.env.VITE_CONT_HOST
    })

    const getGuests = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "guests",
            });
            // console.log(entries);
            const sanitazedEntries =  entries.items[0].fields.guestsList?.list;
            // console.log(sanitazedEntries);
            const sortedEntries = sanitazedEntries.sort(sortByName);
            return sortedEntries
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    }

    const updateGuests = async () => {
      try {
          const entry = await client.getEntry("2d7azqDRhZ6SC181y8ACIO");
          console.log(entry);
          entry.fields.title = "New updated title 2";
      } catch (error) {
          console.log(`Error updating data: ${error}`);
      }
    }

    return { getGuests, updateGuests } 
}

export default useContentful
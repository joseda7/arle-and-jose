import { useEffect, useState } from "react"
import useContentful from "./hooks/useContentful"

function App() {

  const [guests, setGuests] = useState<any>([]);
  const { getGuests, updateGuests } =  useContentful();

  useEffect(() => {
    getGuests().then((response)=> {
      setGuests(response);
      console.log(response);
    })
  },[])
  
  return (
    <>
      <h1> Arle&Jose </h1>
      <div>
        { JSON.stringify(guests) }
      </div>
      <button onClick={() => {updateGuests()}}> Update Guests </button>
    </>
  )
}

export default App

import { useEffect, useState } from "react"
import axios from 'axios';

export default function useApplicationData() {

  let [state, setState] = useState({
    tab: "About",
    businesses: [],
    caterers: [],
    venues: [],
    decorators: [],
    vendors: [],
    weddings: [],
    personnel: [],
    to_do: []
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/businesses"),
      axios.get("/api/caterers"),
      axios.get("/api/venues"),
      axios.get("/api/decorators"),
      axios.get("/api/vendors"),
      axios.get("/api/weddings"),
      axios.get("/api/personnels"),
      axios.get("/api/to_dos")
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        businesses: all[0].data.businesses,
        caterers: all[1].data,
        venues: all[2].data,
        decorators: all[3].data,
        vendors: all[4].data,
        weddings: all[5].data,
        personnel: all[6].data,
        to_dos: all[7].data
      }))
    })
  }, [])

  function setTab(tab) {
    setState({...state, tab})
  };


  return { state, setTab }
}
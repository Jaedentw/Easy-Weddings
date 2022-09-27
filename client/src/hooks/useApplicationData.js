import { useEffect, useState } from "react"
import axios from 'axios';

export default function useApplicationData() {

  let [state, setState] = useState({
    tab: "About",
    filter: "Favorites",
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
      axios.get("/api/to_dos"),
      //axios.get("/api/favorites")
    ]).then((all) => {
      setState(prev => (
        {
        ...prev,
        businesses: all[0].data.businesses,
        caterers: all[1].data.caterers,
        venues: all[2].data.venues,
        decorators: all[3].data.decorators,
        vendors: all[4].data.vendors,
        weddings: all[5].data.weddings,
        personnels: all[6].data.personnels,
        to_dos: all[7].data.to_dos,
        //favorites: all[8].data.favorites
      }))
    })
  }, [])

  function setTab(tab) {
    setState({...state, tab})
  };

  function setFilter(filter) {
    setState({...state, filter})
  }

  return { state, setTab, setFilter }
}
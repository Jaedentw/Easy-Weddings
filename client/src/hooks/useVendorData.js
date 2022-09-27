import { useEffect, useState } from "react"
import axios from 'axios';

export default function useVendorData() {

  let [state, setState] = useState({
    filter: "Favorites",
    businesses: [],
    caterers: [],
    venues: [],
    decorators: [],
    vendors: []
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/businesses"),
      axios.get("/api/caterers"),
      axios.get("/api/venues"),
      axios.get("/api/decorators"),
      axios.get("/api/vendors"),
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
        //favorites: all[8].data.favorites
      }))
    })
  }, [])


  function setFilter(filter) {
    setState({...state, filter})
  }

  return { state, setFilter }
}
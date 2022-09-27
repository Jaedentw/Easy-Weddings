import { useEffect, useState } from "react";
import axios from 'axios';

export default function useApplicationData() {



  let [state, setState] = useState({
    tab: "About",
    loading: false,
    filter: "Favorites",
    businesses: [],
    caterers: [],
    venues: [],
    decorators: [],
    vendors: [],
    weddings: [],
    personnel: [],
    to_do: [],
    user: {}
  });

  useEffect(() => {
    setLoading(true);
    axios.get("/api/profile").then((response) => {
      setUser(response.data.user);
    }

    ).catch(() => {
      console.log('Not authenticated!');
    })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    Promise.all([
      axios.get("/api/businesses"),
      axios.get("/api/caterers"),
      axios.get("/api/venues"),
      axios.get("/api/decorators"),
      axios.get("/api/vendors"),
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        businesses: all[0].data.businesses,
        caterers: all[1].data.caterers,
        venues: all[2].data.venues,
        decorators: all[3].data.decorators,
        vendors: all[4].data.vendors,
      }));
    });
  }, [state.user]);

  function getUserData(){
    Promise.all([
      axios.get("/api/weddings"),
      axios.get("/api/to_dos"),
      axios.get("/api/favorites")
    ]).then((all)=>{
      setState(prev =>({
        ...prev,
        weddings: all[0].data.weddings,
        to_dos: all[1].data.to_dos,
        favorites: all[2].data.favorites

      }))
    })
  }

  function setTab(tab) {
    setState({ ...state, tab });
  };

  function setFilter(filter) {
    setState({ ...state, filter });
  }

  function setUser(user) {
    setState(prev => ({ ...prev, user }));
    getUserData()
  }

  function setLoading(loading) {
    setState(prev => ({ ...prev, loading }));
  }

  return { state, setTab, setFilter,setUser };
}
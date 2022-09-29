import { useEffect, useState } from "react";
import axios from 'axios';

export default function useApplicationData() {

  let [state, setState] = useState({
    tab: "About",
    wedding: "",
    loading: false,
    filter: "Favorites",
    businesses: [],
    caterers: [{id: ""}],
    venues: [],
    decorators: [],
    vendors: [],
    weddings: [],
    personnel: [],
    to_dos: [],
    user: {}
  });


  useEffect(() => {
    setLoading(true);
    console.log('Get api Profile')
    axios.get("/api/users/profile").then((response) => {
      console.log('Initial user query: ',response.data.user)
      setUser(response.data.user);
    }

    ).catch(() => {
      console.log('Not authenticated!');
    })
      .finally(() => {
        setLoading(false);
      });
  }, [state.user]);

  useEffect(() => {
    Promise.all([
      axios.get("/api/businesses"),
      axios.get("/api/caterers"),
      axios.get("/api/venues"),
      axios.get("/api/decorators"),
      axios.get("/api/vendors")
    ]).then((all) => {
      setState(prev => (
        { ...prev,
        businesses: all[0].data.businesses,
        caterers: all[1].data.Caterers,
        venues: all[2].data.venues,
        decorators: all[3].data.Decorators,
        vendors: all[4].data.vendors
      }));
    });
  }, []);

  function getUserData(user){
    const userId = user.id
    Promise.all([
      axios.get("/api/weddings"),
      axios.get("/api/to_dos"),
      //axios.get("/api/favorites")
    ]).then((all)=>{
      setState(prev =>({
        ...prev,
        weddings: all[0].data.weddings,
        to_dos: all[1].data.to_dos,
        //favorites: all[2].data.favorites
      }))
    })
  }

  function setTab(tab) {
    setState(prev => ({ ...prev, tab}));
  };

  function setFilter(filter) {
    setState(prev => ({ ...prev, filter}));
    console.log(filter);
  }

  function setUser(user) {
    localStorage.setItem('user',JSON.stringify(user))
    setState(prev => ({ ...prev, user}));
    getUserData(user)
  }

  function getCurrentUser(){
    const currentUser = localStorage.getItem('user')
    return JSON.parse(currentUser)
  }

  function setLoading(loading) {
    setState(prev => ({ ...prev, loading}));
  }

  function logout(){
    setState(prev => ({ ...prev, user:null }));
    localStorage.removeItem('user');
  }

  function setWedding(wedding) {
    setState(prev => ({ ...prev, wedding}));
  }




  return {state, setTab, setFilter, setUser, getCurrentUser, logout, setWedding};

}
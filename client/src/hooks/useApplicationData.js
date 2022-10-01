import { useEffect, useState } from "react";
import axios from 'axios';

export default function useApplicationData() {

  let [state, setState] = useState({
    tab: "About",
    wedding: "",
    loading: false,
    filter: "Caterers",
    businesses: [],
    caterers: [{id: ""}],
    venues: [],
    decorators: [],
    vendors: [],
    weddings: [],
    personnel: [],
    to_dos: [],
    user: null
  });

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
    console.log('logout funtion user has logged out')
    localStorage.removeItem('user');
    console.log('checking local storage')
    setState(prev => ({ user:null }));
  }

  function setWedding(wedding) {
    setState(prev => ({ ...prev, wedding}));
  }




  return {state, setTab, setFilter, setUser, getCurrentUser, logout, setWedding};

}
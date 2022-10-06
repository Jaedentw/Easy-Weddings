import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function useApplicationData() {

  const navigate = useNavigate();

  let [state, setState] = useState({
    tab: "",
    wedding: null,
    loading: false,
    filter: "Caterers",
    businesses: [],
    caterers: [{ id: "" }],
    venues: [],
    decorators: [],
    vendors: [],
    weddings: [],
    personnel: [],
    to_dos: [],
    user: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/businesses"),
      axios.get("/api/caterers"),
      axios.get("/api/venues"),
      axios.get("/api/decorators"),
      axios.get("/api/vendors")
    ]).then((all) => {
      console.log("all", all);
      setState(prev => (
        {
          ...prev,
          businesses: all[0].data.businesses,
          caterers: all[1].data.Caterers,
          venues: all[2].data.venues,
          decorators: all[3].data.Decorators,
          vendors: all[4].data.vendors
        }));
    });
  }, []);


  function getProfile() {
    axios.get("/api/users/profile").then(({ data }) => {
      setUser(data.user);
    })
      .catch((error)=>{
        console.log('Error getting profile...',error)
      });

      axios.get("/api/business/profile").then(({ data }) => {
        setUser(data.user);
      })
        .catch((error)=>{
          console.log('Error getting profile...',error)
        });
    
  }


  function getUserData() {
    Promise.all([
      axios.get("/api/weddings"),
      axios.get("/api/to_dos"),
      axios.get("/api/guests")
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        weddings: all[0].data.weddings,
        to_dos: all[1].data.To_dos,
        guests: all[2].data.guests
      }));
    });
  }

  function setTab(tab) {
    setState(prev => ({ ...prev, tab }));
  };

  function setFilter(filter) {
    setState(prev => ({ ...prev, filter }));
  }

  function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    setState(prev => ({ ...prev, user }));
    getUserData();
  }

  function getCurrentUser() {
    const currentUser = localStorage.getItem('user');
    return JSON.parse(currentUser);
  }

  function logout() {
    console.log('logout funtion user has logged out');
    localStorage.removeItem('user');
    console.log('checking local storage');
    axios.post("/api/auth/logout").then(() => {
      setState(prev => ({ ...prev, user: {} }))
      console.log("logout", state.user);
    }).finally(
      navigate('/')
    );

  }

  function setWedding(wedding) {
    setTab("Weddings");
    setState(prev => ({ ...prev, wedding }));
  }


  return { state, setTab, setFilter, setUser, getCurrentUser, logout, setWedding, getProfile, getUserData };
}
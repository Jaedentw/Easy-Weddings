import { useEffect, useState } from "react"
import axios from 'axios';

export default function useApplicationData() {

  let [state, setState] = useState({
    tab: "About",
    users: [],
    user: {}
  });


  useEffect(() => {
    Promise.all([
      axios.get("/api/users")
    ]).then((all) => {
      setState(prev => (
        {
        ...prev,
          users: all[0].data.users
      }))
    })
  }, [])

  function setTab(tab) {
    setState(prev =>({...prev, tab}))
  };

  function setUser(user) {
    setState(prev =>({...prev, user}))
  };

  return { state, setTab, setUser}
}
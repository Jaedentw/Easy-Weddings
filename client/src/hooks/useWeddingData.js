import { useEffect, useState } from "react"
import axios from 'axios';

export default function useWeddingData(user) {

  let [state, setState] = useState({
    user: user,
    wedding_id: '',
    weddings: [],
    to_dos: [],
    personnels: []
  });

  function setWedding(wedding_id) {
    setState(prev =>({...prev, wedding_id: wedding_id}))
  };

  console.log(state.user, state.wedding_id);

  useEffect(() => {
    Promise.all([
      axios.get("/api/weddings"),
      axios.get("/api/to_dos"),
      axios.get("/api/personnels"),
    ]).then((all) => {
      setState(prev => (
        {
        ...prev,
        weddings: all[0].data.weddings,
        to_dos: all[1].data.to_dos,
        personnels: all[2].data.personnels
      }))
    })
  }, [])





  return {state, setWedding}
}
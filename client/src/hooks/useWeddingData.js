import { useEffect, useState } from "react"
import axios from 'axios';

export default function useWeddingData() {

  let [state, setState] = useState({
    wedding: "",
    weddings: [],
    to_dos: [],
    personnels: []
  });

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

  function setWedding(wedding) {
    setState({...state, wedding})
  };


  return { state, setWedding}
}
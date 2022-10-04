import {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"


export default function CreateWedding(props) {


  const userId = props.state.user.id


  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const data = {
    userId: userId,
    name: inputs.wedding_name
  }

  function handleWedding(event) {
    event.preventDefault();

    axios.post("/api/weddings/", data)
      .then((response) => {
        props.setUser(response.data.user);
        navigate('/weddings');
        props.setTab('Weddings')
      })

      .catch((res) =>
        console.log('Error logging in!', res.data)
      );
  }
  


  return(
    <div class="form-container">
      <form
        class="form"
        autoComplete="off"
        onSubmit={handleWedding}
      >
        <label>Wedding Name:</label>
        <input
          name="wedding_name"
          type="text"
          placeholder="Name your Wedding"
          value={inputs.wedding_name}
          onChange={handleChange}
        />
        <label>Date:</label>
        <input
          name="wedding_date"
          type="text"
          placeholder="Wedding Date"
          value={inputs.wedding_date || ""}
          onChange={handleChange}
        />
        <label>Image URL:</label>
        <input
          name="wedding_image"
          type="text"
          placeholder="Image URL"
          value={inputs.wedding_image || null}
          onChange={handleChange}
        />

        <button name="create" type="submit">Create</button>

      </form>
    </div>
  )
}
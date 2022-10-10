import {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import "../../styles/Login.css";


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
        props.getUserData();
        navigate('/weddings');
        props.setTab('Weddings');
      })

      .catch((res) =>{
        console.log("message: ", res.response.data.message)
        if(res.response.data.message === "Provide name to create a wedding") {
          alert("Please enter a name to create a new wedding")
        }
      })
  }
  


  return(
    <div class="login-container">
      <i 
        class="fa-sharp fa-solid fa-arrow-left fa-lg create_wedding_arrow"
        onClick={() => {navigate("/weddings")}}
      />
      <form
        name="create-form"
        autoComplete="off"
        onSubmit={handleWedding}
      > 
      <div class="form-inner">
        <h2>New Wedding</h2>
        <div class="form-group form-required">
          <label id="wedding_name">Name:</label>
          <input
            name="wedding_name"
            type="text"
            placeholder="Name your Wedding"
            value={inputs.wedding_name || ""}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Date:</label>
          <input
            name="wedding_date"
            type="text"
            placeholder="Wedding Date"
            value={inputs.wedding_date || ""}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Image URL:</label>
          <input
            name="wedding_image"
            type="text"
            placeholder="Image URL"
            value={inputs.wedding_image}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <input name="create" type="submit" value="Create"/>
        </div>
      </div>
      </form>
    </div>
  )
}
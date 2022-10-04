import {useState} from "react"

export default function CreateWedding(props) {


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }


  return(
    <div class="form-container">
      <form
        class="form"
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
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

      </form>
    </div>
  )
}
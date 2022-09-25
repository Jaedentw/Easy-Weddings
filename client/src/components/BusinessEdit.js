import BusinessSignUp from "./BusinessSignUp";
import BusinessList from "./BusinessList";
import "../styles/BusinessEdit.css"

export default function BusinessEdit(props) {

  return (
    <div class="business-edit-container">
      <BusinessList
        businesses={props.businesses}
      />
    </div>
  )
}
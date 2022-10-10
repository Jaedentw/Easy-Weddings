import React from "react";
import WeddingListItem from "./WeddingListItem";
import "../../styles/WeddingsPage.css"
import Wedding from "./Wedding";
import { getUserWeddings } from "../../helpers/WeddingsPageHelpers";
import { useNavigate } from "react-router-dom";

export default function WeddingPage(props) {

  const state = props.state
  const navigate = useNavigate();

  let userWeddings = [];
  if(props.state.user) {
    userWeddings = getUserWeddings(props.state, props.state.user.id);
  }

  let mappedWeddings = userWeddings.map((w) => {
    return (
      <WeddingListItem
        key={w.id}
        state={state}
        date={w.date}
        name={w.name}
        image_url={w.image_url}
        wedding={w}
        setWedding={props.setWedding}
        getUserData={props.getUserData}
      />
    )
  })

  function renderWeddings(state) {
    if(!state.wedding) {
      mappedWeddings.unshift(
        <WeddingListItem
          key={0}
          state={state}
          image_url="https://cdn.icon-icons.com/icons2/916/PNG/512/Plus_icon-icons.com_71848.png"
          setWedding={navigate}
        />
      )
      return mappedWeddings;
    } else {
      return <Wedding
        key={state.wedding.id}
        state={state}
        wedding={state.wedding}
        setFilter={props.setFilter}
        setWedding={props.setWedding}
        getUserData={props.getUserData}
      />
    }
  }

  return (
    <div class="wedding_list_container">
      <div class="upper_wedding_list">
        <i class={state.wedding ? "fa-sharp fa-solid fa-arrow-left fa-lg" : ""} onClick={() => props.setWedding(null)} ></i>
        <h1 class="title-font bottom-dots">{state.wedding ? state.wedding.name : "Your Weddings"}</h1>
        <i></i>
      </div>
      <div class="wedding_list_items">
        {renderWeddings(props.state)}
      </div>
    </div>
  )
}
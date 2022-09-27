import React from "react";
import WeddingListItem from "./partials/WeddingListItem";
import "../styles/WeddingList.css"
import useWeddingData from "../hooks/useWeddingData";
import Wedding from "./Wedding";
import { getUserWeddings, getWedding } from "../helpers/selectors";

export default function WeddingList(props) {
  
  const {state, setWedding} = useWeddingData();

  getUserWeddings(state, )

  let mappedWeddings = state.weddings.map((w) => {
    return (
      <WeddingListItem
        key={w.id}
        date={w.date}
        name={w.name}
        image_url={w.image_url}
        onClick={setWedding}
      />
    )
  })

  
  function renderWeddings(state) {
    if(!state.wedding) {
      return mappedWeddings;
    } else {
      getWedding(state.wedding);
      return <Wedding/>
    }
  }

  return (
    <div class="wedding_list_container">
      <h1 class="wedding-header">Your Weddings</h1>
      <div class="wedding_list_items">
        {renderWeddings(state)}
        <WeddingListItem
          image_url="https://www.theknot.com/tk-media/images/de8cb1ed-539f-499f-af5a-0de5d1df0de8~rs_768.h"
          name="Jaeden & Ryan"
          date="09-27-2023"
          onClick={setWedding}
        />
        <WeddingListItem
          image_url="https://www.theknot.com/tk-media/images/de8cb1ed-539f-499f-af5a-0de5d1df0de8~rs_768.h"
          name="Jaeden & Ryan"
          date="09-27-2023"
          onClick={setWedding}
        />
        <WeddingListItem
          image_url="https://www.theknot.com/tk-media/images/de8cb1ed-539f-499f-af5a-0de5d1df0de8~rs_768.h"
          name="Jaeden & Ryan"
          date="09-27-2023"
          onClick={setWedding}
        />
      </div>
    </div>
  )
}
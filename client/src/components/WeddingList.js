import React from "react";
import WeddingListItem from "./partials/WeddingListItem";
import "../styles/WeddingList.css"

export default function WeddingList(props) {
  
  // let mappedWeddings = props.weddings.map((w) => {
  //   return (
  //     <WeddingListItem
  //       date={w.date}
  //       name={w.name}
  //       image={w.image_url}
  //     />
  //   )
  // })


  return (
    <div class="wedding_list_container">
      <h1 class="wedding-header">Your Weddings</h1>
      <div class="wedding_list_items">
        <WeddingListItem
            image_url="https://www.theknot.com/tk-media/images/de8cb1ed-539f-499f-af5a-0de5d1df0de8~rs_768.h"
            name="Jaeden & Ryan"
            date="09-27-2023"
          />
          <WeddingListItem
            image_url="https://www.theknot.com/tk-media/images/de8cb1ed-539f-499f-af5a-0de5d1df0de8~rs_768.h"
            name="Jaeden & Ryan"
            date="09-27-2023"
          />
          <WeddingListItem
            image_url="https://www.theknot.com/tk-media/images/de8cb1ed-539f-499f-af5a-0de5d1df0de8~rs_768.h"
            name="Jaeden & Ryan"
            date="09-27-2023"
          />
      </div>
    </div>
  )
}
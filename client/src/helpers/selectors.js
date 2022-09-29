//HELPERS TO HELPERS
function findThingsByUserId(state, key, user_id) {
  let results =[];
  for (let ele of state[key]) {
    if(ele.user_id === user_id) {
      results.push(ele)
    }
  }
  return results
}
function findThingsByBusinessId(state, key, business_id) {
  let results =[];
  for (let ele of state[key]) {
    if(ele.business_id === business_id) {
      results.push(ele)
    }
  }
  return results
}


//ACTUAL EXPORTED HELPERS
export function getUserWeddings(state, user_id) {

  let userWeddings = [];

  for(let wedding of state.weddings) {
    if(wedding.user_id === user_id) {
      userWeddings.push(wedding);
    }
  };

  return(userWeddings);
}

export function getBusinessListings(state, business_id) {
  findThingsByBusinessId(state, "favorites", business_id)
  // let favorites = [];
  //   for(let favorite of state.favorites) {
  //     if(favorite.business_id === business_id) {
  //       favorites.push(favorite);
  //     }
  //   }
  //   return favorites
}

export function getUserWedding(state, userWeddings) {
  console.log(state.wedding_id)
  for (let ele of userWeddings) {
    if(state.wedding_id === ele.id) {
      console.log("get", ele)
      return ele
    }
  }
}
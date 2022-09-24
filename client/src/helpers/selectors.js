export function getUserWeddings(state, user_id) {
  let userWeddings = [];

  for(let wedding of state.weddings) {
    if(wedding.user_id === user_id) {
      userWeddings.push(wedding);
    }
  };

  return(userWeddings);
}



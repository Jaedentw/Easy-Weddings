export function getUserWeddings(state, user_id) {

  if(!state.weddings || !user_id) {
    return [{}]
  }

  let userWeddings = [];

  for(let wedding of state.weddings) {
    if(wedding.user_id === user_id) {
      userWeddings.push(wedding);
    }
  };

  return(userWeddings);
}

export function getWeddingToDos(state, wedding_id) {

  if(!state.to_dos || !wedding_id) {
    return [{}]
  }

  let weddingToDos = [];

  for(let toDo of state.to_dos) {
    if(toDo.wedding_id === wedding_id) {
      weddingToDos.push(toDo)
    }
  }

  return(weddingToDos)
}
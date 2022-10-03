import ToDo from "../components/weddings_page/ToDo";

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

export function getWeddingToDosUnchecked(state, wedding_id) {

  if(!state.to_dos || !wedding_id) {
    return [{}]
  }

  let weddingToDos = [];

  for(let toDo of state.to_dos) {
    if(toDo.wedding_id === wedding_id && toDo.checked === false) {
      weddingToDos.push(toDo)
    }
  }
  return(weddingToDos)
}

export function getWeddingToDosChecked(state, wedding_id) {

  if(!state.to_dos || !wedding_id) {
    return [{}]
  }

  let weddingToDos = [];

  for(let toDo of state.to_dos) {
    if(toDo.wedding_id === wedding_id && toDo.checked === true) {
      weddingToDos.push(toDo)
    }
  }
  return(weddingToDos)
}

export function mappedWeddingFilters(filter, toDos, Guests) {
  if(filter === "Information") {
    return (
      ""
    )
  }
  if(filter === "To Do") {
    return (
      toDos.map((t) => {
        return (
          <ToDo
            key={t.id}
            title={t.title}
            checked={t.checked}
          />
        )
      })
    )
    
  }
  if(filter === "Guests") {
    return (
      ""
    )
  }
}
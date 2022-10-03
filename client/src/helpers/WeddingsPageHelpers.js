import ToDo from "../components/weddings_page/ToDo";
import Guest from "../components/weddings_page/Guest"

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

//TODO RELATED FUNCTIONS
function getWeddingToDos(state, wedding_id, checked) {
  if(!state.to_dos || !wedding_id) {
    return [{}]
  }
  let weddingToDos = [];
  for(let toDo of state.to_dos) {
    if(toDo.wedding_id === wedding_id && toDo.checked === checked) {
      weddingToDos.push(toDo)
    }
  }
  return(weddingToDos)
};

export function mappedWeddingToDos(state, checked) {
  
  let toDos = getWeddingToDos(state, state.wedding.id, checked)
  
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

//GUEST RELATED FUNCTIONS

function getWeddingGuests(state, wedding_id, confirmation_type) {
  if(!state.guests || !wedding_id) {
    return [{}]
  }
  let weddingGuests = [];
  for(let guest of state.guests) {
    if(guest.wedding_id === wedding_id && guest.confirmed === confirmation_type) {
      weddingGuests.push(guest)
    }
  }
  return(weddingGuests)
}
export function mappedWeddingGuests(state, confirmation_type) {
  let guests = getWeddingGuests(state, state.wedding.id, confirmation_type)
  return (
    guests.map((g) => {
      return (
        <Guest
          key={g.id}
          name={g.name}
          confirmed={g.confirmed}
          plus_one={g.plus_one}
        />
      )
    })
  )
}

export function getAllWeddingGuestsCount(state, wedding_id) {
  if(!state.guests || !wedding_id) {
    return [{}]
  }
  let guestCount = 0;
  for(let guest of state.guests) {
    if(guest.wedding_id === wedding_id) {
      if(guest.plus_one) {
        guestCount += 2;
      } else {
        guestCount += 1;
      }
    }
  }
  return(guestCount)
}
export function getWeddingGuestsCount(state, wedding_id, confirmation_type) {
  if(!state.guests || !wedding_id) {
    return [{}]
  }
  let guestCount = 0;
  for(let guest of state.guests) {
    if(guest.wedding_id === wedding_id && guest.confirmed === confirmation_type) {
      if(guest.plus_one) {
        guestCount += 2;
      } else {
        guestCount += 1;
      }
    }
  }
  return(guestCount)
}

import Caterer from '../components/vendors_page/Caterer'
import Vendor from '../components/vendors_page/Vendor'
import Venue from '../components/vendors_page/Venue'
import Decorator from '../components/vendors_page/Decorator'

function mapCaterers(caterers) {
  return (
    caterers.map((c) => {
      return(
        <Caterer 
          key={c.id}
          caterer={c}
        />
      )
    })
  )
}
function mapDecorators(decorators) {
  return (
    decorators.map((c) => {
      return(
        <Decorator
          key={c.id}
          decorator={c}
        />
      )
    })
  )
}
function mapVenues(venues) {
  return (
    venues.map((c) => {
      return(
        <Venue
          key={c.id}
          venue={c}
        />
      )
    })
  )
}
function mapVendors(vendors) {
  return (
    vendors.map((c) => {
      return(
        <Vendor
          key={c.id}
          vendor={c}
        />
      )
    })
  )
}
function getWeddingListings(state, wedding) {

  let data = {
    caterers: [],
    decorators: [],
    venues: [],
    vendors: []
  }

  for(let listingId of wedding.caterers) {
    for(let listing of state.caterers) {
      if(listingId === listing.id) {
        data.caterers.push(listing)
      }
    }
  }
  for(let listingId of wedding.decorators) {
    for(let listing of state.decorators) {
      if(listingId === listing.id) {
        data.decorators.push(listing)
      }
    }
  }
  for(let listingId of wedding.venues) {
    for(let listing of state.venues) {
      if(listingId === listing.id) {
        data.venues.push(listing)
      }
    }
  }
  // for(let listingId of wedding.vendors) {
  //   for(let listing of state.vendors) {
  //     if(listingId === listing.id) {
  //       data.vendirs.push(listing)
  //     }
  //   }
  // }
  console.log("return getWeddingListings",data);
  return data
}


export function mapFilters(filter, state, input, wedding) {

  let data = state
  if(wedding) {
    data = getWeddingListings(state, wedding)
  }

  if(filter === "Caterers") {
    if(input) {
      let filtered = data.caterers.filter( component => component.name.toLowerCase().includes(input.toLowerCase()))
      return mapCaterers(filtered)
    } else {
      return mapCaterers(data.caterers)
    }
  }
  if(filter === "Decorators") {
    if(input) {
      let filtered = data.decorators.filter( component => component.name.toLowerCase().includes(input.toLowerCase()))
      return mapDecorators(filtered)
    } else {
      return mapDecorators(data.decorators)
    }
  }
  if(filter === "Venues") {
    if(input) {
      let filtered = data.venues.filter( component => component.name.toLowerCase().includes(input.toLowerCase()))
      return mapVenues(filtered)
    } else {
      return mapVenues(data.venues)
    }
  }
  if (filter === "Vendors") {
    if(input) {
      let filtered = data.vendors.filter( component => component.name.toLowerCase().includes(input.toLowerCase()))
      return mapVendors(filtered)
    } else {
      return mapVendors(data.vendors)
    }
  }
}
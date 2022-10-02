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


export function mapFilters(filter, state, input, wedding) {

  let data = state
  if(wedding) {
    data = state.wedding
  }

  if(filter === "Caterers") {
    if(input) {
      console.log("input", input)
      let filtered = data.caterers.filter( component => component.cuisine.toLowerCase().includes(input.toLowerCase()))
      return mapCaterers(filtered)
    } else {
      console.log(data.caterers)
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
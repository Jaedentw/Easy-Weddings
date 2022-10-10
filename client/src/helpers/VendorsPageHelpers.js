import Caterer from '../components/vendors_page/Caterer';
import Vendor from '../components/vendors_page/Vendor';
import Venue from '../components/vendors_page/Venue';
import Decorator from '../components/vendors_page/Decorator';

function mapCaterers(state, caterers, getData) {
  return (
    caterers.map((c) => {
      return (
        <Caterer
          key={c.id}
          id={c.id}
          caterer={c}
          state={state}
          getListingsData={getData}
        />
      );
    })
  );
}
function mapDecorators(state, decorators, getData) {
  return (
    decorators.map((c) => {
      return (
        <Decorator
          key={c.id}
          id={c.id}
          decorator={c}
          state={state}
          getListingsData={getData}
        />
      );
    })
  );
}
function mapVenues(state, venues, getData) {
  return (
    venues.map((c) => {
      return (
        <Venue
          key={c.id}
          id={c.id}
          venue={c}
          state={state}
          getListingsData={getData}
        />
      );
    })
  );
}
function mapVendors(state, vendors, getData) {
  return (
    vendors.map((c) => {
      return (
        <Vendor
          key={c.id}
          id={c.id}
          vendor={c}
          state={state}
          getListingsData={getData}
        />
      );
    })
  );
}
function getWeddingListings(state, wedding) {

  let data = {
    caterers: [],
    decorators: [],
    venues: [],
    vendors: []
  };

  if (wedding.caterers) {
    for (let listingId of wedding.caterers) {
      for (let listing of state.caterers) {
        if (listingId === listing.id) {
          data.caterers.push(listing);
        }
      }
    }
  }

  if (wedding.decorators) {
    for (let listingId of wedding.decorators) {
      for (let listing of state.decorators) {
        if (listingId === listing.id) {
          data.decorators.push(listing);
        }
      }
    }
  }

  if (wedding.venues) {
    for (let listingId of wedding.venues) {
      for (let listing of state.venues) {
        if (listingId === listing.id) {
          data.venues.push(listing);
        }
      }
    }
  }
  
  if(wedding.vendors) {
    for(let listingId of wedding.vendors) {
      for(let listing of state.vendors) {
        if(listingId === listing.id) {
          data.vendors.push(listing)
        }
      }
    }
  }
  return data;
}


export function mapFilters(filter, state, input, wedding, searchBy, refreshData) {

  let  getData = () => {}
  if (refreshData) {
    getData = refreshData
  }

  let search = 'name'
  if (searchBy){
    search = searchBy.toLowerCase()
  }

  let data = state;
  if (wedding && state.tab === "Weddings") {
    data = getWeddingListings(state, wedding);
  }

  if (filter === "Caterers") {
    if (input) {
      let filtered = data.caterers.filter(component => component[search].toLowerCase().includes(input.toLowerCase()));
      return mapCaterers(state, filtered, getData);
    } else {
      return mapCaterers(state, data.caterers, getData);
    }
  }
  if (filter === "Decorators") {
    if (input) {
      let filtered = data.decorators.filter(component => component[search].toLowerCase().includes(input.toLowerCase()));
      return mapDecorators(state, filtered, getData);
    } else {
      return mapDecorators(state, data.decorators, getData);
    }
  }
  if (filter === "Venues") {
    if (input) {
      let filtered = data.venues.filter(component => component[search].toLowerCase().includes(input.toLowerCase()));
      return mapVenues(state, filtered, getData);
    } else {
      return mapVenues(state, data.venues, getData);
    }
  }
  if (filter === "Vendors") {
    if (input) {
      let filtered = data.vendors.filter(component => component[search].toLowerCase().includes(input.toLowerCase()));
      return mapVendors(state, filtered, getData);
    } else {
      return mapVendors(state, data.vendors, getData);
    }
  }
}
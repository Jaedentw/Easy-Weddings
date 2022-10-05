import Caterer from '../components/vendors_page/Caterer';
import Vendor from '../components/vendors_page/Vendor';
import Venue from '../components/vendors_page/Venue';
import Decorator from '../components/vendors_page/Decorator';

function mapCaterers(state, caterers) {
  return (
    caterers.map((c) => {
      return (
        <Caterer
          key={c.id}
          id={c.id}
          caterer={c}
          state={state}
        />
      );
    })
  );
}
function mapDecorators(state, decorators) {
  return (
    decorators.map((c) => {
      return (
        <Decorator
          key={c.id}
          id={c.id}
          decorator={c}
          state={state}
        />
      );
    })
  );
}
function mapVenues(state, venues) {
  return (
    venues.map((c) => {
      return (
        <Venue
          key={c.id}
          id={c.id}
          venue={c}
          state={state}
        />
      );
    })
  );
}
function mapVendors(state, vendors) {
  return (
    vendors.map((c) => {
      return (
        <Vendor
          key={c.id}
          id={c.id}
          vendor={c}
          state={state}
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
  for(let listingId of wedding.vendors) {
    for(let listing of state.vendors) {
      if(listingId === listing.id) {
        data.vendirs.push(listing)
      }
    }
  }
  return data;
}


export function mapFilters(filter, state, input, wedding) {

  let data = state;
  console.log('This is the tab', state.tab)
  if (wedding && state.tab === "Weddings") {
    data = getWeddingListings(state, wedding);
    console.log('This is the wedding data: ',data)
  }

  if (filter === "Caterers") {
    if (input) {
      let filtered = data.caterers.filter(component => component.name.toLowerCase().includes(input.toLowerCase()));
      return mapCaterers(state, filtered);
    } else {
      return mapCaterers(state, data.caterers);
    }
  }
  if (filter === "Decorators") {
    if (input) {
      let filtered = data.decorators.filter(component => component.name.toLowerCase().includes(input.toLowerCase()));
      return mapDecorators(state, filtered);
    } else {
      return mapDecorators(state, data.decorators);
    }
  }
  if (filter === "Venues") {
    if (input) {
      let filtered = data.venues.filter(component => component.name.toLowerCase().includes(input.toLowerCase()));
      return mapVenues(state, filtered);
    } else {
      return mapVenues(state, data.venues);
    }
  }
  if (filter === "Vendors") {
    if (input) {
      let filtered = data.vendors.filter(component => component.name.toLowerCase().includes(input.toLowerCase()));
      return mapVendors(state, filtered);
    } else {
      return mapVendors(state, data.vendors);
    }
  }
}
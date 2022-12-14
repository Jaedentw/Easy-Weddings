import Caterer from '../components/vendors_page/Caterer';
import Vendor from '../components/vendors_page/Vendor';
import Venue from '../components/vendors_page/Venue';
import Decorator from '../components/vendors_page/Decorator';

//map specific components. (All similar in structure. Might find a way to enter what type of component to render for clean up and re-usability)
function mapCaterers(state, caterers, getData, setListing) {
  return (
    caterers.map((c) => {
      return (
        <Caterer
          key={c.id}
          id={c.id}
          caterer={c}
          state={state}
          getListingsData={getData}
          setListing={setListing}
        />
      );
    })
  );
}
function mapDecorators(state, decorators, getData, setListing) {
  return (
    decorators.map((c) => {
      return (
        <Decorator
          key={c.id}
          id={c.id}
          decorator={c}
          state={state}
          getListingsData={getData}
          setListing={setListing}
        />
      );
    })
  );
}
function mapVenues(state, venues, getData, setListing) {
  return (
    venues.map((c) => {
      return (
        <Venue
          key={c.id}
          id={c.id}
          venue={c}
          state={state}
          getListingsData={getData}
          setListing={setListing}
        />
      );
    })
  );
}
function mapVendors(state, vendors, getData, setListing) {
  return (
    vendors.map((c) => {
      return (
        <Vendor
          key={c.id}
          id={c.id}
          vendor={c}
          state={state}
          getListingsData={getData}
          setListing={setListing}
        />
      );
    })
  );
}

//Gets all listings via wedding id
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

//Functionality to get a list of listings based on filter and search states in addition to passing functions to components
export function mapFilters(filter, state, input, wedding, searchBy, refreshData, setData) {

  //a setState function for the onClick edit
  let setListing = () => {}
  if (setData) {
    setListing = setData
  }

  //re-send axios requests to update site data
  let  getData = () => {}
  if (refreshData) {
    getData = refreshData
  }

  //input into search bar
  let search = 'name'
  if (searchBy){
    search = searchBy.toLowerCase()
  }

  //if you're on the weddings page
  let data = state;
  if (wedding && state.tab === "Weddings") {
    data = getWeddingListings(state, wedding);
  }

  //renders filtered listings from a search or if there is no search render all of that listing classification
  if (filter === "Caterers") {
    if (input) {
      let filtered = data.caterers.filter(component => component[search].toLowerCase().includes(input.toLowerCase()));
      return mapCaterers(state, filtered, getData, setListing);
    } else {
      return mapCaterers(state, data.caterers, getData, setListing);
    }
  }
  if (filter === "Decorators") {
    if (input) {
      let filtered = data.decorators.filter(component => component[search].toLowerCase().includes(input.toLowerCase()));
      return mapDecorators(state, filtered, getData, setListing);
    } else {
      return mapDecorators(state, data.decorators, getData, setListing);
    }
  }
  if (filter === "Venues") {
    if (input) {
      let filtered = data.venues.filter(component => component[search].toLowerCase().includes(input.toLowerCase()));
      return mapVenues(state, filtered, getData, setListing);
    } else {
      return mapVenues(state, data.venues, getData, setListing);
    }
  }
  if (filter === "Vendors") {
    if (input) {
      let filtered = data.vendors.filter(component => component[search].toLowerCase().includes(input.toLowerCase()));
      return mapVendors(state, filtered, getData, setListing);
    } else {
      return mapVendors(state, data.vendors, getData, setListing);
    }
  }
}
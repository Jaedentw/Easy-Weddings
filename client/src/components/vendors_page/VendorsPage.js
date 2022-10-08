import {useState} from 'react'
import "../../styles/VendorPage.css"
import Filter from '../partials/Filter'
import {mapFilters} from '../../helpers/VendorsPageHelpers'

export default function VendorsPage(props) {

  let filter = props.state.filter

  let [searchInput, setSearchInput] = useState()
  let [searchFilter, setSearchFilter] = useState('Name');
  let mapped = mapFilters(filter, props.state, searchInput, props.state.wedding, searchFilter)
  
  return (
    <div class="business-list-container">
      <div class="business-nav-container">
        <div class="business-buttons">
          <Filter
            name="Caterers"
            selected={filter}
            onClick={props.setFilter}
            setSearchFilter={setSearchFilter}
          />
          <Filter
            name="Decorators"
            selected={filter}
            onClick={props.setFilter}
            setSearchFilter={setSearchFilter}
          />
          <Filter
            name="Venues"
            selected={filter}
            onClick={props.setFilter}
            setSearchFilter={setSearchFilter}
          />
          <Filter
            name="Vendors"
            selected={filter}
            onClick={props.setFilter}
            setSearchFilter={setSearchFilter}
          />
        </div>
        <div>
        <i class="fa-solid fa-magnifying-glass"></i> <input 
          class="business-search"
          placeholder="Search"
          onInput={(event) => {setSearchInput(event.target.value);}}
        ></input>
        </div>
        <div class="search_filters">
          <strong>Search By: </strong>
          <Filter
            name="Name"
            selected={searchFilter}
            onClick={setSearchFilter}
          />
          <Filter
            name="Description"
            selected={searchFilter}
            onClick={setSearchFilter}
          />
          <Filter
            name="City"
            selected={searchFilter}
            onClick={setSearchFilter}
          />
          {filter === "Caterers" &&
            <Filter
              name="Cuisine"
              selected={searchFilter}
              onClick={setSearchFilter}
            />
          }
          {filter === "Caterers" &&
            <Filter
              name="Alternatives"
              selected={searchFilter}
              onClick={setSearchFilter}
            /> 
          }
          {(filter === "Decorators" || filter === "Vendors") &&
            <Filter
              name="Specialty"
              selected={searchFilter}
              onClick={setSearchFilter}
            />
          }
          {filter === "Venues" &&
            <Filter
              name="Features"
              selected={searchFilter}
              onClick={setSearchFilter}
            />
          }
          {(filter === "Decorators" || filter === "Venues") && 
            <Filter
              name="Theme"
              selected={searchFilter}
              onClick={setSearchFilter}
            />
          }
          {(filter === "Caterers" || filter === "Venues") && 
            <Filter
              name="Capacity"
              selected={searchFilter}
              onClick={setSearchFilter}
            />
          }
          {filter === "Vendors" && 
            <Filter
              name="Rate"
              selected={searchFilter}
              onClick={setSearchFilter}
            />
          }

        </div>
      </div>
      <div>
        {mapped}
      </div>
    </div>
  )
}
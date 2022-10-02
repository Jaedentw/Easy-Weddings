import {useState} from 'react'
import "../../styles/VendorPage.css"
import Filter from './Filter'
import {mapFilters} from '../../helpers/VendorsPageHelpers'

export default function VendorsPage(props) {

  let [search, setSearch] = useState()
  let mapped = mapFilters(props.state.filter, props.state, search, props.state.wedding)
  
  return (
    <div class="business-list-container">
      <div class="business-nav-container">
        <div class="business-buttons">
          <Filter
            name="Caterers"
            selected={props.state.filter}
            onClick={props.setFilter}
          />
          <Filter
            name="Decorators"
            selected={props.state.filter}
            onClick={props.setFilter}
          />
          <Filter
            name="Venues"
            selected={props.state.filter}
            onClick={props.setFilter}
          />
          <Filter
            name="Vendors"
            selected={props.state.filter}
            onClick={props.setFilter}
          />
        </div>
        <div>
        <i class="fa-solid fa-magnifying-glass"></i> 
        <input 
          class="business-search"
          placeholder="Search"
          onInput={(event) => {setSearch(event.target.value);}}
        ></input>
        </div>
      </div>
      <div>
        {mapped}
      </div>
    </div>
  )
}
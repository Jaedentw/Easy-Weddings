import React from "react";
import "../styles/VendorsPage.css"
import BusinessList from './partials/BusinessList'
import useApplicationData from "../hooks/useApplicationData"

export default function VendorsPage(props) {

  const {state} = useApplicationData();

  return (
    <BusinessList
      businesses={state.businesses}
    />
  )
}
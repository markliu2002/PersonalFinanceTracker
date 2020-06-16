// LEGEND COMPONENT WHICH SHOWS THE CATEGORIES AND THEIR COLOURS
import React from 'react'

export default function Legend() {

  // Used an unordered list, each list item is a category
  // Used span for the coloured dots
  return (
    <ul className="legend">

      <li className="FoodLegendIcon">
        <span class="Fooddot"></span>
        Food & Drinks
      </li>

      <li className="TransportLegendIcon">
        <span class="Transportdot"></span>
        Transportation
      </li>

      <li className="UtilLegendIcon">
        <span class="Utildot"></span>
        Utilities
      </li>

      <li className="PersonalLegendIcon">
        <span class="Personaldot"></span>
        Personal
      </li>

    </ul>
  )
}

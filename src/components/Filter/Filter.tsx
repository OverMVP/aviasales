import React from "react"
import styles from "./Filter.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { setCheapest, setFastest } from "../../store/actions/filterActions"

const { "ticket-list-filter": formStyle, "label-filter": labelFilter, checked } = styles

function isCheapestSelected(value: any): any {
  if (value === "CHEAPEST") return true
  return false
}

function isFastestSelected(value: any): any {
  if (value === "FASTEST") return true
  return false
}

export default function Filter() {
  const dispatch = useDispatch()
  const { filterSelected } = useSelector(({ filterReducer }) => filterReducer)

  const onFilterChange = (e: any): any => {
    if (e.target.value === "cheapest") return dispatch(setCheapest)
    if (e.target.value === "fastest") return dispatch(setFastest)
  }

  const classForCheapest = isCheapestSelected(filterSelected)
    ? `${labelFilter} ${checked}`
    : `${labelFilter}`
  const classForFastest = isFastestSelected(filterSelected)
    ? `${labelFilter} ${checked}`
    : `${labelFilter}`

  return (
    <form className={formStyle}>
      <input
        type="radio"
        id="cheap"
        name="ticketListFilter"
        hidden
        onChange={onFilterChange}
        value="cheapest"
        checked={isCheapestSelected(filterSelected)}
      />
      <label className={classForCheapest} htmlFor="cheap">
        самый дешевый
      </label>

      <input
        type="radio"
        id="fast"
        name="ticketListFilter"
        hidden
        onChange={onFilterChange}
        value="fastest"
        checked={isFastestSelected(filterSelected)}
      />
      <label className={classForFastest} htmlFor="fast">
        самый быстрый
      </label>
    </form>
  )
}

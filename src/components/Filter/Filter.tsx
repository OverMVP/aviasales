import React from "react"
import styles from "./Filter.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { setCheapest, setFastest } from "../../store/actions/filterActions"

const { "ticket-list-filter": formStyle, "label-filter": labelFilter, checked } = styles

function isCheapestSelected(state: any): any {
  if (state === "CHEAPEST") return true
  return false
}

function isFastestSelected(state: any): any {
  if (state === "FASTEST") return true
  return false
}

export default function Filter() {
  const dispatch = useDispatch()
  const { filterSelected } = useSelector(({ ticketsListReducer }) => ticketsListReducer)

  const onFilterChange = (e: any): any => {
    if (e.target.value === "cheapest") return dispatch(setCheapest)
    if (e.target.value === "fastest") return dispatch(setFastest)
    return
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

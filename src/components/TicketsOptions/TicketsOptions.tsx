import React from "react"
import styles from "./TicketsOptions.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { checkBoxClicked } from "../../store/actions/ticketOptionsActions"

const {
  "options-container": options,
  "checkbox-container": checkboxContainer,
  "check-box": checkBox,
} = styles

export default function TicketsOptions() {
  const dispatch = useDispatch()
  const { filterTransfers } = useSelector(({ ticketsListReducer }: any) => ticketsListReducer)

  function handleCheckBoxChange(id: any) {
    dispatch(checkBoxClicked(id))
  }

  const checkboxes = filterTransfers.map((el: any) => {
    return (
      <div className={checkboxContainer} key={el.id}>
        <label>
          <input
            type="checkbox"
            value={el.value}
            onChange={() => handleCheckBoxChange(el.id)}
            checked={el.isChecked}
          />
          <span className={checkBox}></span>
          {el.name}
        </label>
      </div>
    )
  })

  return (
    <form className={options}>
      <h3>количество пересадок</h3>
      {checkboxes}
    </form>
  )
}

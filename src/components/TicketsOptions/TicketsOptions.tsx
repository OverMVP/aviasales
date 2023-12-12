import React from "react"
import styles from "./TicketsOptions.module.scss"
import { useDispatch, useSelector } from "react-redux"

const {
  "options-container": options,
  "checkbox-container": checkboxContainer,
  "check-box": checkBox,
} = styles

export default function TicketsOptions() {
  const dispatch = useDispatch()
  const { all, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = useSelector(
    ({ ticketOptionsReducer }: any) => ticketOptionsReducer
  )

  console.log(all)

  function onTransferChange(e: any): any {
    if (e.target.value === "all") return dispatch(all)
  }

  return (
    <form className={options}>
      <h3>количество пересадок</h3>
      <div className={checkboxContainer}>
        <label>
          <input type="checkbox" checked={all} onChange={onTransferChange} value="all" />
          <span className={checkBox}></span>
          Все
        </label>
      </div>

      <div className={checkboxContainer}>
        <label>
          <input
            type="checkbox"
            checked={withoutTransfer}
            value="without"
            onChange={onTransferChange}
          />
          <span className={checkBox}></span>
          Без пересадок
        </label>
      </div>

      <div className={checkboxContainer}>
        <label>
          <input type="checkbox" checked={oneTransfer} onChange={onTransferChange} />
          <span className={checkBox}></span>1 пересадка
        </label>
      </div>

      <div className={checkboxContainer}>
        <label>
          <input type="checkbox" checked={twoTransfers} onChange={onTransferChange} />
          <span className={checkBox}></span>2 пересадки
        </label>
      </div>
      <div className={checkboxContainer}>
        <label>
          <input type="checkbox" checked={threeTransfers} onChange={onTransferChange} />
          <span className={checkBox}></span>3 пересадки
        </label>
      </div>
    </form>
  )
}

import React from "react"
import styles from "./Ticket.module.scss"
import s7logo from "../../assets/s7logo.png"

const {
  ticket,
  "ticket-header": ticketHeader,
  price,
  "routes-wrapper": routesWrapper,
  "forward-route": forwardRoute,
  "backward-route": backwardRoute,
  route,
  flightTime,
  transfer,
} = styles

export default function Ticket() {
  return (
    <li className={ticket}>
      <div className={ticketHeader}>
        <h3 className={price}>13 400 Р</h3>
        <img src={s7logo} alt="s7logo" />
      </div>
      <div className={routesWrapper}>
        <div className={forwardRoute}>
          <div className={route}>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={flightTime}>
            <span>В пути</span>
            <span>21ч 15м</span>
          </div>
          <div className={transfer}>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
        </div>

        <div className={backwardRoute}>
          <div className={route}>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={flightTime}>
            <span>В пути</span>
            <span>21ч 15м</span>
          </div>
          <div className={transfer}>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
        </div>
      </div>
    </li>
  )
}

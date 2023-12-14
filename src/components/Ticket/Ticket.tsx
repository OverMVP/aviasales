import React, { FC } from "react"
import styles from "./Ticket.module.scss"

const {
  ticket,
  "ticket-header": ticketHeader,
  priceClass,
  "routes-wrapper": routesWrapper,
  "forward-route": forwardRoute,
  "backward-route": backwardRoute,
  route,
  flightTime,
  transfer,
} = styles

function formatPrice(price: any): any {
  const RUB = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumSignificantDigits: 6,
  })
  return RUB.format(price)
}

function formatTransfers(arr: string[]) {
  if (arr.length === 1) return `пересадка`
  if (arr.length > 1 && arr.length < 5) return `пересадки`
  if (arr.length >= 5) return `пересадок`
  return "Без пересадок"
}

function formatFlightTime(minutes: number) {
  let hh = Math.floor(minutes / 60).toString()
  let mins = (minutes %= 60)

  return `${hh}ч ${mins}м`
}

const Ticket: FC<any> = ({ price, carrier, forward, backward }) => {
  return (
    <li className={ticket}>
      <div className={ticketHeader}>
        <h3 className={priceClass}>{formatPrice(price)}</h3>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="s7logo" />
      </div>
      <div className={routesWrapper}>
        <div className={forwardRoute}>
          <div className={route}>
            <span>
              {forward.origin} - {forward.destination}
            </span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={flightTime}>
            <span>В пути</span>
            <span>{formatFlightTime(forward.duration)}</span>
          </div>
          <div className={transfer}>
            <span>
              {forward.stops.length > 0 ? forward.stops.length : null}{" "}
              {formatTransfers(forward.stops)}
            </span>
            <span>
              {forward.stops.length > 0 ? forward.stops.map((el: any) => `${el}`).join(", ") : "-"}
            </span>
          </div>
        </div>

        <div className={backwardRoute}>
          <div className={route}>
            <span>
              {backward.origin} - {backward.destination}
            </span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={flightTime}>
            <span>В пути</span>
            <span>{formatFlightTime(backward.duration)}</span>
          </div>
          <div className={transfer}>
            <span>
              {backward.stops.length > 0 ? backward.stops.length : null}{" "}
              {formatTransfers(backward.stops)}
            </span>
            <span>
              {backward.stops.length > 0
                ? backward.stops.map((el: any) => `${el}`).join(", ")
                : "-"}
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket

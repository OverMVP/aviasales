import React from "react"
import styles from "./TicketList.module.scss"
import Ticket from "../Ticket/Ticket"

const { "ticket-list": ticketList, "show-more-btn": showMore } = styles

export default function TicketList() {
  return (
    <>
      <ul className={ticketList}>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </ul>
      <button className={showMore}>показать еще 5 билетов!</button>
    </>
  )
}

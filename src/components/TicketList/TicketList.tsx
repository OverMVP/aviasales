// @ts-nocheck
import React, { FC, useEffect } from "react"
import styles from "./TicketList.module.scss"
import Ticket from "../Ticket/Ticket"
import { useDispatch, useSelector } from "react-redux"
import { setNumberToShow } from "../../store/actions/setNumberToShow"
import Loader from "../Loader"
import ErrorPage from "../ErrorPage"
import { nanoid } from "nanoid"

const { "ticket-list": ticketList, "show-more-btn": showMore } = styles

function sortFollowToCheckBoxes(arr, filterTransfersObj) {
  let sortedTickets = [...arr]

  filterTransfersObj.forEach((obj) => {
    if (!obj.isChecked) {
      sortedTickets = sortedTickets.filter((ticket) => {
        return (
          ticket.segments[0].stops.length !== obj.value &&
          ticket.segments[1].stops.length !== obj.value
        )
      })
    }
  })
  return sortedTickets
}

function showFiveTickets(arr, tickets = 5) {
  let newArr = arr.slice(0, tickets)
  if (newArr.length < 0) return

  return newArr.map((el) => {
    const [forward, backward] = el.segments
    return (
      <Ticket
        price={el.price}
        carrier={el.carrier}
        forward={forward}
        backward={backward}
        key={nanoid()}
      />
    )
  })
}

const TicketList: FC = () => {
  const dispatch = useDispatch()
  const { tickets, numberToShow, stop, filterTransfers } = useSelector(
    ({ ticketsListReducer }) => ticketsListReducer
  )

  const list = showFiveTickets(sortFollowToCheckBoxes(tickets, filterTransfers), numberToShow)

  return (
    <>
      {!stop ? <Loader /> : null}
      <ul className={ticketList}>{list}</ul>
      {list.length > 0 ? (
        <button className={showMore} onClick={() => dispatch(setNumberToShow())}>
          показать еще 5 билетов!
        </button>
      ) : (
        <ErrorPage />
      )}
    </>
  )
}

export default TicketList

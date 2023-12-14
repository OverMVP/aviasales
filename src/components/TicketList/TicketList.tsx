// @ts-nocheck
import React, { FC } from "react"
import styles from "./TicketList.module.scss"
import Ticket from "../Ticket/Ticket"
import { useDispatch, useSelector } from "react-redux"
import { setNumberToShow } from "../../store/actions/setNumberToShow"
import Loader from "../Loader"
import ErrorPage from "../ErrorPage"
import { nanoid } from "nanoid"
import { sortFollowToCheckBoxes } from "./helpers"

const { "ticket-list": ticketList, "show-more-btn": showMore } = styles

function sliceTickets(arr, tickets = 5) {
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

  const list = sliceTickets(sortFollowToCheckBoxes(tickets, filterTransfers), numberToShow)

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

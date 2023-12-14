import { getTicketsList } from "./helpers/getTickets"
import { getTotalFlightDuration } from "./helpers/getTotalFlightDuration"
import { increaseNumberToShow } from "./helpers/increaseNumberToShow"
import { sortCheapest } from "./helpers/sortCheapest"
import { sortFastest } from "./helpers/sortFastest"
import { updateCheckBoxState } from "./helpers/updateCheckBoxState"

const defaultState = {
  tickets: [],
  stop: false,
  numberToShow: 5,
  filterSelected: "CHEAPEST",
  filterTransfers: [
    {
      id: 0,
      isChecked: true,
      name: "Все",
      value: "ALL",
    },
    {
      id: 1,
      isChecked: true,
      name: "Без пересадок",
      value: 0,
    },
    {
      id: 2,
      isChecked: true,
      name: "1 пересадка",
      value: 1,
    },
    {
      id: 3,
      isChecked: true,
      name: "2 пересадки",
      value: 2,
    },
    {
      id: 4,
      isChecked: true,
      name: "3 пересадки",
      value: 3,
    },
  ],
}

// function getFewerTransfers(ticketSegments: any) {
//   return ticketSegments[0].stops.length > ticketSegments[1].stops.length
//     ? ticketSegments[0].stops.length
//     : ticketSegments[1].stops.length
// }

// function getTicketsByTransfersSort(state: any) {
//   if (state.filterTransfers[1] === false) {
//     return {
//       ...state,
//       tickets: state.tickets.filter((ticket: any) => getFewerTransfers(ticket.segments) !== 0),
//     }
//   }
//   return {
//     ...state,
//     tickets: state.tickets.filter((ticket: any) => getFewerTransfers(ticket.segments) === 0),
//   }
// }

export const ticketsListReducer = (state = defaultState, { type, payload }: any) => {
  const actionTypes: any = {
    CHECKBOX_CLICKED: () => updateCheckBoxState(state, payload),
    GET_TICKETS: () => getTicketsList(state, getTotalFlightDuration, payload),
    SET_NUMBER_TO_SHOW: () => increaseNumberToShow(state, payload),
    SET_CHEAPEST: () => sortCheapest(state, payload),
    SET_FASTEST: () => sortFastest(state, payload, getTotalFlightDuration),
  }

  if (actionTypes.hasOwnProperty(type)) {
    return actionTypes[type]()
  }
  return { ...state }
}

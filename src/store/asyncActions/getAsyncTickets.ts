import Cookies from "js-cookie"
import { getTickets } from "../actions/getTickets"

export const getAsyncTickets = () => {
  //@ts-ignore
  return (dispatch) => {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${Cookies.get("searchId")}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getTickets(json))
        if (!json.stop) {
          setTimeout(() => dispatch(getAsyncTickets()), 1000)
        }
      })
      .catch((err) => {
        console.log(err, "trying to load tickets again")
        setTimeout(() => dispatch(getAsyncTickets()), 1000)
      })
  }
}

// @ts-nocheck
import { useEffect } from "react"
import HeaderLogo from "../HeaderLogo"
import Filter from "../Filter/Filter"
import styles from "./App.module.scss"
import TicketList from "../TicketList"
import TicketsOptions from "../TicketsOptions"
import Cookies from "js-cookie"
import { useDispatch } from "react-redux"
import { getAsyncTickets } from "../../store/asyncActions/getAsyncTickets"

const { pageWrapper, contentWrapper, asideWrapper, main } = styles

function App() {
  const dispatch = useDispatch()

  async function getSearchId() {
    fetch("https://aviasales-test-api.kata.academy/search")
      .then((res) => res.json())
      .then(({ searchId }) => {
        if (!Cookies.get("searchId")) {
          Cookies.set("searchId", `${searchId}`)
        }
        return searchId
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getSearchId().then((searchId) => {
      dispatch(getAsyncTickets())
    })

    return Cookies.remove("searchId")
  }, [])

  return (
    <>
      <HeaderLogo />
      <div className={pageWrapper}>
        <div className={contentWrapper}>
          <aside className={asideWrapper}>
            <TicketsOptions />
          </aside>
          <main className={main}>
            <Filter />
            <TicketList />
          </main>
        </div>
      </div>
    </>
  )
}

export default App

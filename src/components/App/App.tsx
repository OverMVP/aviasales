import React from "react"
import HeaderLogo from "../HeaderLogo"
import Filter from "../Filter/Filter"
import styles from "./App.module.scss"
import TicketList from "../TicketList"
import TicketsOptions from "../TicketsOptions"

const { pageWrapper, contentWrapper, asideWrapper, main } = styles

function App() {
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

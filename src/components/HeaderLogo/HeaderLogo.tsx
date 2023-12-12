import React from "react"
import styles from "./HeaderLogo.module.scss"
import logo from "../../assets/logo.png"

const { headerContainer } = styles

export default function HeaderLogo() {
  return (
    <header className={headerContainer}>
      <img src={logo} alt="" />
    </header>
  )
}

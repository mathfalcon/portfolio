import React from "react"
import { useTranslation } from "react-i18next"
import "./styles/404.css"

export default function Nav() {
  const [t] = useTranslation("global")
  return (
    <div className="container-404">
      <div className="divider-404">
        <span className="sliding">
          <span>404-</span>
          <span>NOT-</span>
          <span>FOUND</span>
        </span>
        <div className="wrapper">
          <span className="sliding">
            <span>404-</span>
            <span>NOT-</span>
            <span>FOUND</span>
          </span>
        </div>
      </div>
      <div
        className="back-buttons-404"
        onClick={() => (window.location.href = "/")}
      >
        <h1>{t("404.btn")}</h1>
      </div>
    </div>
  )
}

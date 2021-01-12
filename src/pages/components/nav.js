import React from "react"
import { useTranslation } from "react-i18next"
import "../styles/nav.css"

export default function Nav() {
  const [t, i18n] = useTranslation("global")
  return (
    <div className="navbar">
      <div className="left">
        <span className="animate-pop-in">Mathías Falcón</span>
      </div>
      <div className="center">
        <div
          className="animate-pop-in"
          onClick={() => {
            localStorage.setItem("localLang", "es")
            i18n.changeLanguage("es")
          }}
        >
          ES
        </div>
        <div
          className="animate-pop-in"
          onClick={() => {
            localStorage.setItem("localLang", "en")
            i18n.changeLanguage("en")
          }}
        >
          EN
        </div>
      </div>
      <div className="right">
        <span className="animate-pop-in">
          <a href="#first">{t("nav.home")}</a>
        </span>
        <span className="animate-pop-in">
          <a href="#second">{t("nav.about")}</a>
        </span>
        <span className="animate-pop-in">
          <a href="#third">{t("nav.projects")}</a>
        </span>
        <span className="animate-pop-in">
          <a href="#fourth">{t("nav.contact")}</a>
        </span>
      </div>
    </div>
  )
}

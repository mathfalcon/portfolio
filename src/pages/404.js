import React from "react"
import "./styles/404.css"

export default function Nav() {

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
        <h1>HOME</h1>
      </div>
    </div>
  )
}

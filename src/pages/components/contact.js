import React, { Fragment } from "react"
import "../styles/index.css"
import "../styles/contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { useTranslation } from "react-i18next"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function Contact() {
  const [open, setOpen] = React.useState(false)
  const [t] = useTranslation("global")

  const handleClick = async () => {
    await navigator.clipboard.writeText("mathfalcondj@gmail.com")
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <Fragment>
      <h1 className="contact-title">{t("contact.title")}</h1>
      <ul>
        <li>
          <a
            href="https://github.com/mathfalcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icons git"
              icon={faGithub}
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mathias_falcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icons tw"
              icon={faTwitter}
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          <a
            style={{ cursor: "pointer" }}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icons mail"
              icon={faEnvelope}
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/math%C3%ADas-falc%C3%B3n-13b03a1b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icons ln"
              icon={faLinkedin}
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mathfalcon.dj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icons ig"
              icon={faInstagram}
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
      <h1 className="contact-title title2">{t("contact.subtitle")}</h1>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {t("contact.alert")}
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

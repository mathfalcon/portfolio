import React, { Fragment } from "react"
import "../styles/index.css"
import "../styles/projects.css"
import henryBank from "../assets/images/henrybank.jpeg"
import henryStore from "../assets/images/henrystore.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next"

export default function Projects() {
  const [t]= useTranslation("global")
  return (
    <Fragment>
      <div className="container">
        <h2>{t("projects.title")}</h2>
        <div className="box">
          <div className="imgBx">
            <img src={henryStore} alt="Henry Store" />
          </div>
          <div className="infoBx">
            <h1>{t("projects.project-1-title")}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: t("projects.project-1-description", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></p>
          </div>
          <a
            className="gitLink"
            href="https://github.com/mathfalcon/Henry-Store-e-commerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="iconsProject"
              icon={faGithub}
              aria-hidden="true"
            />
            <p>{t('projects.github-button')}</p>
          </a>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={henryBank} alt="Henry Bank" />
          </div>
          <div className="infoBx">
            <h1>{t("projects.project-2-title")}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: t("projects.project-2-description", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></p>
          </div>
          <a
            className="gitLink"
            href="https://github.com/mathfalcon/Henry-Bank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="iconsProject"
              icon={faGithub}
              aria-hidden="true"
            />
            <p>{t('projects.github-button')}</p>
          </a>
        </div>
      </div>
    </Fragment>
  )
}

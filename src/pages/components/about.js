import React, { Fragment } from "react"
import Rating from "@material-ui/lab/Rating"
import skills from "../assets/skills.js"
import "../styles/index.css"
import "../styles/about.css"
import { useTranslation } from "react-i18next"

export default function About() {
  const [t] = useTranslation("global")
  return (
    <Fragment>
      <div className="about-me-title">
        <h1>{t('about.title')}</h1>
        <span className="about-photo"></span>
        <div>
          <p dangerouslySetInnerHTML={{
              __html: t("about.bio", {
                interpolation: { escapeValue: false },
              }),
            }}>
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="infoBlock">
          <h1>{t('about.skills-title')}</h1>
          <div className="skill-container">
            {skills.map((e, index) => (
              <Skill key={index} name={e.name} level={e.level} />
            ))}
          </div>
        </div>
        <div className="infoBlock">
          <h1>{t('about.experience-title')}</h1>
          <div className="skill-description">{t('about.experience')}</div>
        </div>
        <div className="infoBlock">
          <h1>{t('about.soft-skills-title')}</h1>
          <div className="skill-container">
            <div className="skill-description">
              <p>{t('about.soft-skills-1')}</p>
            </div>
            <div className="skill-description">
              <p>{t('about.soft-skills-2')}</p>
            </div>
            <div className="skill-description">
              <p>{t('about.soft-skills-3')}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const Skill = props => {
  return (
    <div className="skill-description">
      <p>{props.name}</p>
      <Rating style={{color:'#f57c00'}} name="read-only" value={props.level} readOnly />
    </div>
  )
}

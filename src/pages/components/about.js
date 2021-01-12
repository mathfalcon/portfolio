import React, { Fragment } from "react"
import Rating from "@material-ui/lab/Rating"
import "../styles/index.css"
import "../styles/about.css"
import { useTranslation } from "react-i18next"
import WorkCard from "./work-experience-card"
import Button from "@material-ui/core/Button"
import GetAppIcon from "@material-ui/icons/GetApp"
import escv from "../assets/CV/es.pdf"
import encv from "../assets/CV/en.pdf"

var skills = [
  {
    name: "React - React Native - Next JS",
    level: 4,
  },
  {
    name: "Nest JS",
    level: 4,
  },
  {
    name: "Javascript",
    level: 4,
  },
  {
    name: "REST/Graph QL",
    level: 4,
  },
  {
    name: "HTML",
    level: 4,
  },
  {
    name: "CSS",
    level: 4,
  },

  {
    name: "Material UI",
    level: 4,
  },
  {
    name: "Express Js",
    level: 4,
  },
  {
    name: "Git - GitHub",
    level: 4,
  },
  {
    name: "Redux",
    level: 4,
  },
  {
    name: "SQL - NoSQL",
    level: 3,
  },
  {
    name: "Node",
    level: 3,
  },
  {
    name: "JSON",
    level: 3,
  },
  {
    name: "Microservices",
    level: 3,
  },
  {
    name: "WebSockets",
    level: 3,
  },
  {
    name: "Adobe XD",
    level: 3,
  },
  {
    name: "AWS",
    level: 2,
  },
  {
    name: "Typescript",
    level: 2,
  },
  {
    name: "GatsbyJs",
    level: 2,
  },
]
export default function About() {
  const [t, i18n] = useTranslation("global")
  return (
    <Fragment>
      <div className="about-me-title">
        <h1>{t("about.title")}</h1>
        <span className="about-photo"></span>
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: t("about.bio", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </div>
        <Button
          variant="contained"
          color="default"
          startIcon={<GetAppIcon />}
          style={{ backgroundColor: "#ffa26d" }}
          href={i18n.language === "es" ? escv : encv}
          target="_blank"
        >
          {t("about.cv")}
        </Button>
      </div>
      <div className="skills">
        <div className="infoBlock">
          <h1>{t("about.skills-title")}</h1>
          <div className="skill-container">
            {skills.map((e, index) => (
              <Skill key={index} name={e.name} level={e.level} />
            ))}
          </div>
        </div>
        <div className="infoBlock">
          <h1>{t("about.experience-title")}</h1>
          <div
            className="skill-description"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              overflow: "auto",
            }}
          >
            <WorkCard
              period={t("about.experience3.period")}
              title={t("about.experience3.title")}
              description={t("about.experience3.description")}
            />
            <WorkCard
              period={t("about.experience1.period")}
              title={t("about.experience1.title")}
              description={t("about.experience1.description")}
            />
            <WorkCard
              period={t("about.experience2.period")}
              title={t("about.experience2.title")}
              description={t("about.experience2.description")}
            />
          </div>
        </div>
        <div className="infoBlock">
          <h1>{t("about.soft-skills-title")}</h1>
          <div className="skill-container">
            <div className="skill-description">
              <p>{t("about.soft-skills-1")}</p>
            </div>
            <div className="skill-description">
              <p>{t("about.soft-skills-2")}</p>
            </div>
            <div className="skill-description">
              <p>{t("about.soft-skills-3")}</p>
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
      <Rating
        style={{ color: "#f57c00" }}
        name="read-only"
        value={props.level}
        readOnly
      />
    </div>
  )
}

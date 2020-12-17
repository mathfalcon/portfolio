import React, { Fragment } from "react"
import "../styles/index.css"
import downArrow from "../assets/images/downarrow.png"
import Particles from "react-particles-js"

import { useTranslation } from "react-i18next"

export default function Landing() {
  const [t] = useTranslation("global")
  return (
    <Fragment>
      <div className="mainTitle">
        <div className="mainLeft animate-slide-left">
          <p
            dangerouslySetInnerHTML={{
              __html: t("landing.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></p>
        </div>
        <div className="mainRight">
          <span className="my-photo"></span>
        </div>
        <div className="main-down-arrow">
          <a href="#second">
            <img src={downArrow} width="50" alt="Scroll to next section." />
          </a>
        </div>
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: false,
                  value_area: 0,
                },
              },
              color: {
                value: "#ff7043",
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 4,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5208374434773,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 34.107242916656496,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffa270",
                opacity: 0.4182482500651045,
                width: 2.9987610382026366,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.5,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
      </div>
    </Fragment>
  )
}

import React, { useEffect, useState } from "react"
import "./styles/index.css"
import Nav from "./components/nav"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Landing from "./components/landing"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import { Helmet } from "react-helmet"
import metaPhoto from './assets/images/images.jpg'

import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
})

function App() {
  const [storedLang, setStoredLang] = useState(false)
  useEffect(() => {
    const store = localStorage.getItem("localLang")
    if (store) {
      setStoredLang(true)
      i18next.changeLanguage(store)
    }
  }, [])

  return (
    <I18nextProvider i18n={i18next}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mathías Falcón — Full Stack Developer</title>
        <link rel="canonical" href="https://mathfalcon.github.io/portfolio/" />
        <meta property="og:title" content="Mathías Falcón — Full Stack Developer" />
        <meta property="og:description" content="Hey! I am Mathías and I work as a Full Stack Dev, check out my portfolio!" />
        <meta property="og:type" content="webiste" />
        <meta name="description" content="Hey! I am Mathías and I work as a Full Stack Dev, check out my portfolio!" />
        <meta property='og:url' content='https://mathfalcon.github.io/portfolio/'/>
        <meta property='og:image' content={metaPhoto}/>
      </Helmet>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Welcome to</span>
          </h1>
          <h1 className="hide">
            <span className="text">My Portfolio</span>
          </h1>
          {!storedLang && (
            <div className="hide langBtn">
              <div
                className="text btn"
                onClick={() => {
                  document.body.className = document.body.className.replace(
                    "js-loading",
                    ""
                  )
                  i18next.changeLanguage("en")
                  localStorage.setItem("localLang", "en")
                }}
              >
                ENGLISH
              </div>
              <div
                className="text btn"
                onAnimationEnd={
                  !storedLang
                    ? () => (document.body.className += "js-loading")
                    : undefined
                }
                onClick={() => {
                  document.body.className = document.body.className.replace(
                    "js-loading",
                    ""
                  )
                  i18next.changeLanguage("es")
                  localStorage.setItem("localLang", "es")
                }}
              >
                ESPAÑOL
              </div>
              <h1 className="text helper">
                Choose a Language / Elige un Idioma
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="slider" id="first"></div>
      <section className="app section">
        <Nav />
        <Landing />
      </section>
      <section className="infoScroll section" id="second">
        <About />
      </section>
      <section className="projects section" id="third">
        <Projects />
      </section>
      <section className="contact section" id="fourth">
        <Contact />
      </section>
    </I18nextProvider>
  )
}

export default App

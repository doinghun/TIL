import React from "react"
import classnames from "classnames"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  )
}

const iframe =
  '<iframe src="https://dohun.xyz/TIL-cytoscape/" width="500" height="500" style="border-style: none;  box-shadow: 0px 0px 15px 0px #888888"></iframe>'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/js-wth-is-es")}
            >
              Look Around
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className={styles.features}>
            <Iframe iframe={iframe} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home

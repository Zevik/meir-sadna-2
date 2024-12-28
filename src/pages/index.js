import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import WorkshopInfo from "../components/workshop-info"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <WorkshopInfo />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>אומנות השחרור - סדנה עם מאיר אבינר</title>
    <meta name="description" content="סדנת אומנות השחרור עם מאיר אבינר - הצטרפו אלינו לחוויה מעמיקה ומשחררת" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
)

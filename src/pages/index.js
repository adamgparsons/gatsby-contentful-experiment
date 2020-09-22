import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
export const query = graphql`
{
  lessons: allContentfulLesson {
    nodes {
      title
      slug
      author {
        name
      }
    }
  }
}
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Lessons</h1>
    {console.log(data.lessons.nodes.map(lesson => lesson.title))}
    {data.lessons.nodes.map(lesson => (<Link key={lesson.slug} to={`/${lesson.slug}`}>{lesson.title}</Link>))}
  </Layout>
)

export default IndexPage

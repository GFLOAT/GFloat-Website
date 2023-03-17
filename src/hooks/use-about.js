import { graphql, useStaticQuery } from 'gatsby'

const aboutQuery = graphql`{
  overview: markdownRemark(fileAbsolutePath: {regex: "/about/overview/"}) {
    rawMarkdownBody
  }
  future: markdownRemark(fileAbsolutePath: {regex: "/about/future/"}) {
    rawMarkdownBody
  }
  status: markdownRemark(fileAbsolutePath: {regex: "/about/status/"}) {
    rawMarkdownBody
  }
}`

export const useAbout = () => {
  const content = useStaticQuery(aboutQuery)

  const flattenedContent = Object.keys(content)
    .reduce((acc, key) => ({ ...acc, [key]: content[key].rawMarkdownBody }), {})

  return flattenedContent
}
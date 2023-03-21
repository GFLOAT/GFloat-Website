import { graphql, useStaticQuery } from 'gatsby'

const publicationsQuery = graphql`query publicationsQuery {
  webinars: allWebinarsYaml(sort: {date: DESC}) {
    nodes {
      title
      date
      description
      url
    }
  }
  papers: allPapersYaml {
    nodes {
      title
      citation
      url
    }
  }
}
`

export const usePublications = () => {
  const { webinars, papers } = useStaticQuery(publicationsQuery)
  return {
    webinars: webinars.nodes,
    papers: papers.nodes,
  }
}

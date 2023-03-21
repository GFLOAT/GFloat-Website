import { graphql, useStaticQuery } from 'gatsby'

const resourcesQuery = graphql`query resourcesQuery {
  resources: allResourcesYaml {
    nodes {
      title
      description
      url
    }
  }
}
`

export const useResources = () => {
  const { resources } = useStaticQuery(resourcesQuery)
  return resources.nodes
}

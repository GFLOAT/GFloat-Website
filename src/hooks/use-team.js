import { graphql, useStaticQuery } from 'gatsby'

const teamQuery = graphql`query teamQuery {
  team: allTeamYaml(sort: {lastName: ASC}) {
    nodes {
      name
      lastName
      institution
      photo
    }
  }
}
`

export const useTeam = () => {
  const { team } = useStaticQuery(teamQuery)

  return team.nodes
}
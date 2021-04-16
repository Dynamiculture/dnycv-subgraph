import { GraphQLClient, gql } from 'graphql-request'

async function main() {
  const endpoint = 'https://api.thegraph.com/subgraphs/name/dynamiculture/dnycv';

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
  {
    accountTokenBalances(orderBy: balance) {
      id
      token
      balance
    }
  }
`;

  const data = await graphQLClient.request(query);
  console.log(JSON.stringify(data, undefined, 2));
}

main().catch((error) => console.error(error));

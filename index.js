const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
 
  type Clanek {
    nazev: String
    autor: String
    pocet_nav: Int
    tema: String
    datum_vyd: Int
  }

  
  type Query {
    clanky: [Clanek]
  }
`;
const clanky = [
    {
      nazev: 'Nazev1',
      autor: 'Autor1',
      pocet_nav:'4',
      tema:'Tema1',
      datum_vyd: '20'
    },
    {
        nazev: 'Nazev2',
        autor: 'Autor2',
        pocet_nav:'44',
        tema:'Tema2',
        datum_vyd: '21'
    },
  ];
  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      clanky: () => clanky,
    },
  };
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
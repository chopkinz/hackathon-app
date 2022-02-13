import { gql, ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "../../src/graphql/schema";
import resolvers from "../../src/graphql/resolvers";
import { prisma } from "../../src/libs/PrismaClient";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  //   playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: ({ req, res }: { req: MicroRequest; res: ServerResponse }) => {
    return { req, res, prisma };
  },
});

const startServer = apolloServer.start();

export default async function handler(req: MicroRequest, res: ServerResponse) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { GraphQLUpload } from "graphql-upload";
type Context = {
  req: MicroRequest;
  res: ServerResponse;
  prisma: PrismaClient;
};
const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    allAnimals: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.animal.findMany();
    },
    randomAnimal: async (_parent: any, _args: any, context: Context) => {
      const animal = await context.prisma.$queryRaw`SELECT *
      FROM "Animal"
      ORDER BY random()
      LIMIT 1;`;
      return animal[0];
    },
    animal: async (
      _parent: any,
      { scientificName }: { scientificName: string },
      context: Context
    ) => {
      return context.prisma.animal.findUnique({
        where: { scientific_name: scientificName },
      });
    },
  },
};

export default resolvers;

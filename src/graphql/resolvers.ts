import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";

type Context = {
  req: MicroRequest;
  res: ServerResponse;
  prisma: PrismaClient;
};
const resolvers = {
  Query: {
    getAnimals: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.animal.findMany();
    },
  },
};

export default resolvers;

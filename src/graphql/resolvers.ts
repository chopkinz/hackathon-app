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
    allAnimals: async (
      _parent: any,
      { skip, first }: { skip: number; first: number },
      context: Context
    ) => {
      return await context.prisma.animal.findMany({
        where: {
          NOT: [
            {
              common_name: null,
            },
            {
              image: null,
            },
          ],
        },
        skip: skip,
        ...(first > 0 && { take: first }),
      });
    },
    animalCount: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.animal.count({
        where: {
          NOT: [
            {
              image: null,
            },
            {
              common_name: null,
            },
          ],
        },
      });
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

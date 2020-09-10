import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getStarting: async (_, args) => {
      return await prisma.starting({ id: "ckeva8fatdp3t0a26tkb1b2vi" });
    },
  },

  Mutation: {
    modifyStarting: async (_, args) => {
      const { status } = args;

      try {
        await prisma.updateStarting({
          where: {
            id: "ckeva8fatdp3t0a26tkb1b2vi",
          },
          data: {
            isStart: status,
          },
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

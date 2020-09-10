import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getStreaming: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.streamings({
          where: {
            id,
          },
        });
        return result[0];
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },

  Mutation: {
    modifyStreaming: async (_, args) => {
      const { id, key } = args;

      try {
        const result = await prisma.updateStreaming({
          where: {
            id,
          },
          data: {
            key: key,
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

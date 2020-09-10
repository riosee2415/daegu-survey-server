import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getMainText: async (_, args) => {
      return await prisma.mainText({ id: "ckew8ilve84xx09993hhzjwa0" });
    },
  },

  Mutation: {
    modifyText: async (_, args) => {
      const { text } = args;

      try {
        await prisma.updateMainText({
          where: {
            id: "ckew8ilve84xx09993hhzjwa0",
          },
          data: {
            text,
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

import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    modifyComplete: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.updateUser({
          where: {
            id,
          },
          data: {
            isComplete: true,
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

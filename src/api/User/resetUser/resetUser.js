import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    resetUserEvaluation: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.updateUser({
          where: { id },
          data: {
            isComplete: false,
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

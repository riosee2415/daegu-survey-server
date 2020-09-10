import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    resetUserEvaluation: async (_, args) => {
      const { id, array } = args;
      console.log(id);
      console.log(array);
      return true;
      try {
        const result = await prisma.updateUser({
          where: { id },
          data: {
            isComplete: false,
          },
        });

        await prisma.deleteManyEvaluations({
          where: {
            user: { id },
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

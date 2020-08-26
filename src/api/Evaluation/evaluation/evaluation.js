import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getSelectEvaluation: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.evaluations({
          where: {
            user: {
              id: id,
            },
          },
        });
        return result;
      } catch (e) {
        return [];
      }
    },
  },
};

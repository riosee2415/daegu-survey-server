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
          orderBy: "createdAt_ASC",
        });
        return result;
      } catch (e) {
        return [];
      }
    },

    getAvgData: async (_, args) => {
      const { id } = args;
      console.log(id);
      return 6;
    },
  },

  Mutation: {
    createEvaluation: async (_, args) => {
      const { userKey, questionKey, score, description } = args;

      try {
        const result = await prisma.createEvaluation({
          user: {
            connect: { id: userKey },
          },
          question: {
            connect: { id: questionKey },
          },
          score,
          description,
        });

        console.log(result);

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

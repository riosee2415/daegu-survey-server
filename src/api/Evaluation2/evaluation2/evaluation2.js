import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getEvaluationAvg03: async (_, args) => {
      try {
        const evaluationResult = await prisma.evaluation2s({
          orderBy: "createdAt_ASC",
        });

        return evaluationResult;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    createEvaluation2: async (_, args) => {
      const { userKey, score, description, sort } = args;

      try {
        const result = await prisma.createEvaluation2({
          user: {
            connect: { id: userKey },
          },
          score,
          description,
          sort,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

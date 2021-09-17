import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getAllEval2: async (_, args) => {
      return await prisma.evaluation2s();
    },

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

    getSelectEvaluation2: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.evaluation2s({
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

    deleteEvaluation2: async (_, args) => {
      const { list } = args;

      try {
        await Promise.all(
          list.map(async (id) => {
            const result = await prisma.deleteEvaluation2({
              id,
            });
          })
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

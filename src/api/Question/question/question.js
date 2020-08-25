import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getQuestion: async (_, args) => {
      const { round } = args;

      try {
        const result = await prisma.questions({
          where: {
            round,
          },
        });

        return result;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },

  Mutation: {
    deleteQuestion: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.deleteQuestion({ id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    modifyQuestionSort: async (_, args) => {
      const { id, sort } = args;

      try {
        const result = await prisma.updateQuestion({
          where: {
            id,
          },
          data: {
            sort: sort,
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

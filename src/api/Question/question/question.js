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
          orderBy: "sort_ASC",
        });

        return result;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    getQuestionForTotal: async (_, args) => {
      const { round } = args;

      try {
        const result = await prisma.questions({
          where: {
            round,
          },
          orderBy: "sort_ASC",
        });

        return result;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    getAllQuestionForTotal: async (_, args) => {
      const { round } = args;

      try {
        const result = await prisma.questions({
          where: {
            round,
          },
          orderBy: "sort_ASC",
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
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

    createQuestion: async (_, args) => {
      const { round, quetionTitle, sort } = args;

      try {
        const result = await prisma.createQuestion({
          round,
          quetionTitle,
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

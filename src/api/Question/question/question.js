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

      // const avgArr = [];

      try {
        const result = await prisma.questions({
          where: {
            round,
          },
          orderBy: "sort_ASC",
        });

        // await Promise.all(
        //   result.map(async (data, index) => {
        //     const EvaluationData = await prisma.evaluations({
        //       where: {
        //         question: {
        //           id: data.id,
        //         },
        //       },
        //     });

        //     let sum = 0;

        //     EvaluationData.map(async (doc, idx) => {
        //       sum = sum + doc.score;

        //       if (EvaluationData.length - 1 === idx) {
        //         avgArr.push(sum / EvaluationData.length);
        //       }
        //     });
        //   })
        // );

        // console.log(avgArr);

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

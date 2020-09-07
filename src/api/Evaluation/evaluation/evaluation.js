import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getAllEval: async (_, args) => {
      return await prisma.evaluations();
    },

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

      try {
        const result = await prisma.evaluations({});
        return 1;
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getEvaluationAvg: async (_, args) => {
      const { round } = args;

      const avgDatum = [];

      try {
        const questionResult = await prisma.questions({
          where: {
            round,
          },
          orderBy: "sort_ASC",
        });

        await Promise.all(
          questionResult.map(async (data) => {
            const evaluationResult = await prisma.evaluations({
              where: {
                question: {
                  id: data.id,
                },
              },
              orderBy: "createdAt_ASC",
            });

            let sum = 0;

            await Promise.all(
              evaluationResult.map((data, idx) => {
                sum += parseInt(evaluationResult[idx].score);
              })
            );

            const length = evaluationResult.length;
            const avgData = {
              questionTitle: data.quetionTitle,
              value: (sum / length).toFixed(1),
              percent: Math.floor((sum / length / 10) * 100),
            };
            avgDatum.push(avgData);
          })
        );
        return avgDatum;
      } catch (e) {
        console.log(e);
        return [];
      }
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

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

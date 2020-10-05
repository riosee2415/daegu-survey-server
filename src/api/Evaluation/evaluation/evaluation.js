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
      const expertAvgDatum = [];
      const allAvgDatum = [];

      try {
        const questionResult = await prisma.questions({
          where: {
            round,
          },
          orderBy: "sort_ASC",
        });

        let totalSum = 0;
        await Promise.all(
          questionResult.map(async (data) => {
            const evaluationResult = await prisma.evaluations({
              where: {
                question: {
                  id: data.id,
                },
                user: {
                  isExpert: false,
                },
              },
              orderBy: "createdAt_ASC",
            });

            let sum = 0;
            await Promise.all(
              evaluationResult.map((data, idx) => {
                sum += parseInt(evaluationResult[idx].score);
                totalSum += parseInt(evaluationResult[idx].score);
              })
            );

            const length = evaluationResult.length;
            const avg = sum / length ? (sum / length).toFixed(2) : "0.00";

            const avgData = {
              questionTitle: data.quetionTitle,
              totalSum: totalSum,
              sum: sum,
              avg: avg,
              score: (avg * 0.4).toFixed(2),
              isExpert: false,
            };
            avgDatum.push(avgData);
          })
        );

        totalSum = 0;
        await Promise.all(
          questionResult.map(async (data) => {
            const evaluationResult = await prisma.evaluations({
              where: {
                question: {
                  id: data.id,
                },
                user: {
                  isExpert: true,
                },
              },
              orderBy: "createdAt_ASC",
            });

            let sum = 0;
            await Promise.all(
              evaluationResult.map((data, idx) => {
                sum += parseInt(evaluationResult[idx].score);
                totalSum += parseInt(evaluationResult[idx].score);
              })
            );

            const length = evaluationResult.length;
            const avg = sum / length ? (sum / length).toFixed(2) : "0.00";

            const avgData = {
              questionTitle: data.quetionTitle,
              totalSum: totalSum,
              sum: sum,
              avg: avg,
              score: (avg * 0.6).toFixed(2),
              isExpert: true,
            };
            expertAvgDatum.push(avgData);
          })
        );

        await Promise.all(
          avgDatum.map((data, idx) => {
            allAvgDatum.push(avgDatum[idx]);
            allAvgDatum.push(expertAvgDatum[idx]);
          })
        );

        return allAvgDatum;
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

    deleteEvaluation: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.deleteEvaluation({
          id,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

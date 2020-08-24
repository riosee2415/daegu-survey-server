import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getTodayRecord: async (_, args) => {
      const { date } = args;
      let list = [];

      try {
        list = await prisma.acceptRecords({
          where: {
            date: date,
          },
        });

        return list.length;
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getMonthRecord: async (_, args) => {
      const { date } = args;
      let list = [];

      try {
        list = await prisma.acceptRecords({
          where: {
            date_starts_with: date,
          },
        });

        return list.length;
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getYearRecord: async (_, args) => {
      const { date } = args;
      let list = [];

      try {
        list = await prisma.acceptRecords({
          where: {
            date_starts_with: date,
          },
        });

        return list.length;
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getAllMonthRecord: async (_, args) => {
      const { date } = args;
      let stan = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];

      try {
        let dataList = [];

        await Promise.all(
          stan.map(async (data) => {
            let cnt = await prisma.acceptRecords({
              where: {
                date_starts_with: date + data,
              },
            });

            dataList.push(cnt.length);
          })
        );

        return dataList;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};

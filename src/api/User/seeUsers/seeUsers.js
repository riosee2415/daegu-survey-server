import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getUserByExpert: async (_, args) => {
      const { isExpert, round } = args;

      const users = await prisma.users({
        where: {
          isExpert,
          round,
        },
        orderBy: "username_ASC",
      });

      return users;
    },

    getAllUser: async (_, args) => {
      const { round } = args;

      const users = await prisma.users({
        where: {
          round,
        },
        orderBy: "username_ASC",
        orderBy: "isExpert_DESC",
      });

      return users;
    },
  },
};

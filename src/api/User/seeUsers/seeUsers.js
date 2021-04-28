import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getUserByType: async (_, args) => {
      const { isExpert, isManager, round } = args;

      const users = await prisma.users({
        where: {
          isExpert,
          isManager,
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
        orderBy: "isManager_DESC",
        orderBy: "isExpert_DESC",
      });

      return users;
    },
  },
};

import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    loginHandler: async (_, args) => {
      const { name, mobileNumber } = args;

      const result = await prisma.users({
        where: {
          username: name,
          mobileNumber: mobileNumber,
        },
      });

      return result;
    },

    loginLog: async (_, args) => {
      return await prisma.loginLogs({
        orderBy: "createdAt_DESC",
      });
    },
  },

  Mutation: {
    addLoginLog: async (_, args) => {
      const { username } = args;

      await prisma.createLoginLog({
        username,
      });

      return true;
    },
  },
};

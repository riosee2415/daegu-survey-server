import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUsers: async (_, args) => {
      const users = await prisma.users();

      return users;
    },
  },
};

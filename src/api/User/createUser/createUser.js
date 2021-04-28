import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createUser: async (_, args) => {
      const { username, mobileNumber, round, isExpert, isManager } = args;

      try {
        const result = await prisma.createUser({
          username,
          mobileNumber,
          round: parseInt(round),
          isExpert: Boolean(isExpert),
          isManager: Boolean(isManager),
        });

        return true;
      } catch (e) {
        return false;
      }
    },
  },
};

import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createUser: async (_, args) => {
      const { username, mobileNumber, round, isExpert } = args;

      try {
        const result = await prisma.createUser({
          username,
          mobileNumber,
          round: parseInt(round),
          isExpert: Boolean(isExpert),
        });

        return true;
      } catch (e) {
        return false;
      }
    },
  },
};

import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getUserLoginResult: async (_, args) => {
      const { userId, password } = args;

      try {
        const result = await prisma.adminUsers({
          where: {
            userId: userId,
            password: password,
          },
        });
        return result.length > 0;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

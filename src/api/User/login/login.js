import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    loginHandler: async (_, args) => {
      const { name, mobileNumber } = args;

      return await prisma.users({
        where: {
          username: name,
          mobileNumber: mobileNumber,
        },
      });
    },
  },
};

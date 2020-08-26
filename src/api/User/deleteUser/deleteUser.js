import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteUser: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.deleteUser({ id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

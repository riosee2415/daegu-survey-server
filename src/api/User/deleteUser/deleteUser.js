import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteUser: async (_, args) => {
      const { id } = args;

      try {
        const result = await prisma.deleteUser({ id });

        // const users = await prisma.users();

        // await Promise.all(
        //   users.map(async (data) => {
        //     const result = await prisma.updateUser({
        //       data: { isDelete: false },
        //       where: { id: data.id },
        //     });
        //   })
        // );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

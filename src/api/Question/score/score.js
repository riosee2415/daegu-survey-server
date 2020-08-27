export default {
  Query: {
    getScore: async (_, args) => {
      const { id } = args;

      console.log(id);

      return 5.5;
    },
  },
};

export default {
  Query: {
    getSelectEvaluation: async (_, args) => {
      const { id } = args;

      console.log(id);
    },
  },
};

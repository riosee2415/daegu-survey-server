import { prisma } from "../../../generated/prisma-client";

export default {
  Evaluation2: {
    user: ({ id }) => prisma.evaluation2({ id }).user(),
  },
};

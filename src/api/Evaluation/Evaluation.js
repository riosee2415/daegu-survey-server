import { prisma } from "../../../generated/prisma-client";

export default {
  Evaluation: {
    question: ({ id }) => prisma.evaluation({ id }).question(),
    user: ({ id }) => prisma.evaluation({ id }).user(),
  },
};

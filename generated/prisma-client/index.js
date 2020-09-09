"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "AcceptRecord",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Evaluation",
    embedded: false
  },
  {
    name: "Streaming",
    embedded: false
  },
  {
    name: "Starting",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
exports.prisma = new exports.Prisma();

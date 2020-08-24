import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";
import path from "path";

const PORT = process.env.PORT || 4001;
const ENDPOINT = process.env.END_POINT;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated }),
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT, endpoint: ENDPOINT }, () =>
  console.log(`🍀 Server Running On Port http://localhost:${PORT}`)
);

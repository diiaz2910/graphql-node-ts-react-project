import { ApolloServer } from "@apollo/server";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4"; // Importa expressMiddleware
import schema from "./graphql";

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.start().then(() => {
  // Utiliza expressMiddleware para montar el servidor Apollo en Express en la ruta "/graphql"""
  app.use(
    "/playground",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

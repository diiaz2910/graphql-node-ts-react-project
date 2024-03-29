import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

const app = express(); // Inicia una app de express
app.use(cors()); // Habilita CORS

const server = new ApolloServer({
  schema, // Esquema de GraphQL
  playground: true, // Habilita el playground
  instrospection: true,
});

server.applyMiddleware({ app }); // Habilita el servidor de Apollo en la app de express

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
}); // Inicia el servidor en el puerto 5000

import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import "graphql-import-node";
import rootSchema from "./schemas/schema.graphql";
import resolvers from "./resolvers/resolversMap";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [rootSchema],
  resolvers,
});

export default schema;

import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import "graphql-import-node";
import rootSchema from "./schemas/schema.graphql";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [rootSchema],
});

export default schema;

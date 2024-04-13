import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import "graphql-import-node";
import inventoryTypeDefs from "./schemas/inventory.graphql";
import paymentsTypeDefs from "./schemas/payments.graphql";
import resolvers from "./resolvers/index";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [inventoryTypeDefs, paymentsTypeDefs],
  resolvers,
});

export default schema;

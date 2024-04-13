import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "@graphql-tools/schema";
import "graphql-import-node";
import inventoryTypeDefs from "./schemas/inventory.graphql";
import paymentsTypeDefs from "./schemas/payments.graphql";
import inventoryResolver from "./resolvers/resolversInventory";
import paymentsResolver from "./resolvers/resolversPayments";

const schema: GraphQLSchema = mergeSchemas({
  typeDefs: [inventoryTypeDefs, paymentsTypeDefs],
  resolvers: [inventoryResolver, paymentsResolver],
});

export default schema;

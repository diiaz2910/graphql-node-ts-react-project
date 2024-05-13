import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "@graphql-tools/schema";
import "graphql-import-node";
import inventoryTypeDefs from "./schemas/inventory.graphql";
import paymentsTypeDefs from "./schemas/payments.graphql";
import employeeTypeDefs from "./schemas/employee.graphql";
import inventoryResolver from "./resolvers/resolversInventory";
import paymentsResolver from "./resolvers/resolversPayments";
import employeeResolver from "./resolvers/resolversEmployee";



const schema: GraphQLSchema = mergeSchemas({
  typeDefs: [inventoryTypeDefs, paymentsTypeDefs, employeeTypeDefs],
  resolvers: [inventoryResolver, paymentsResolver, employeeResolver],
});

export default schema;

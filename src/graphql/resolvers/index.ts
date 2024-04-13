const { mergeSchemas } = require("@graphql-tools/schema");
import inventoryResolvers from "./resolversInventory";
import paymentResolvers from "./resolversPayments";

const resolvers = mergeSchemas({
  schemas: [inventoryResolvers, paymentResolvers],
});

export default resolvers;

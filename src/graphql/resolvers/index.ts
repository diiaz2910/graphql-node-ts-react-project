import { mergeResolvers } from "@graphql-tools/merge";
import inventoryResolvers from "./resolversInventory";
import paymentResolvers from "./resolversPayments";

const resolvers = mergeResolvers([inventoryResolvers, paymentResolvers]);

export default resolvers;

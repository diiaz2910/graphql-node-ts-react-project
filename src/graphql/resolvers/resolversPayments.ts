import { IResolvers } from "@graphql-tools/utils";
import { Db } from "mongodb";
import { PAYMENT_COLLECTION } from "../../mongo/collections";

const paymentsResolver: IResolvers = {
  Query: {
    async getPayments(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db.collection(PAYMENT_COLLECTION).find().toArray();
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async createPayments(root: void, args: any, context: { db: Db }) {
      try {
        await context.db.collection(PAYMENT_COLLECTION).insertOne(args.payment);
      } catch (error) {
        console.log(error);
      }
      return "Payment created successfully";
    },
  },
};

export default paymentsResolver;

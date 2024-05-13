import { Db } from "mongodb";
import { ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";
import { PAYMENT_COLLECTION } from "../../mongo/collections";

// interfaces
import { IPayments } from "./../../interfaces/IPayments";

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
        const regexp = new RegExp(args.payment.amount, "i");
        const exist = await context.db
          .collection(PAYMENT_COLLECTION)
          .findOne({ amount: regexp });
        if (exist) {
          return "Payment already exists";
        }
        await context.db.collection(PAYMENT_COLLECTION).insertOne(args.payment);
      } catch (error) {}
      return "Payment created successfully";
    },
    async updatePayments(root: void, args: any, context: { db: Db }) {
      try {
        const { _id, ...paymentFieldsToUpdate } = args.payment;
        const exist = await context.db
          .collection(PAYMENT_COLLECTION)
          .findOne({ _id: ObjectId.createFromHexString(_id) });
        if (exist) {
          await context.db
            .collection(PAYMENT_COLLECTION)
            .updateOne(
              { _id: ObjectId.createFromHexString(_id) },
              { $set: paymentFieldsToUpdate }
            );
          return "Payment updated successfully";
        } else {
          return "Payment does not exist";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default paymentsResolver;

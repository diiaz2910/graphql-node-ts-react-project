import { Db } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";

const inventoryResolver: IResolvers = {
  Query: {
    async getItems(root: void, args: void, context: Db) {
      try {
        return await context.collection("items").find().toArray();
      } catch (error) {
        console.log(error);
      }
    },
    getItem(root: void, args: any) {
      const [found] = data.inventory.filter((inv) => inv._id === args._id);
      return found;
    },
  },
  Mutation: {
    async createItem(root: void, args: any, context: { db: Db }) {
      try {
        await context.db.collection("items").insertOne(args.item);
        data.inventory.push(args.item);
        return "Item created";
      } catch (error) {
        console.log(error);
      }
    },
  },
  Items: {
    payments(parent: any) {
      // todos los resolvers pueden recibir hasta 4 parametros root, args, context, options
      const paymentList: Array<any> = [];
      parent.payments.map((paymentId: string) =>
        paymentList.push(
          ...data.payments.filter((payment) => payment._id === paymentId)
        )
      );
      return paymentList;
    },
  },
};

export default inventoryResolver;

import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";

const inventoryResolver: IResolvers = {
  Query: {
    getItems() {
      return data.inventory;
    },
    getItem(root: void, args: any) {
      const [found] = data.inventory.filter((inv) => inv._id === args._id);
      return found;
    },
  },
  Mutation: {
    createItem(root: void, args: any) {
      data.inventory.push(args.item);
      return "Item created";
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

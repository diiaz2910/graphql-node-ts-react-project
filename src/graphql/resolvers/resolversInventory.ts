import { Db } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";
import { INVENTORY_COLLECTION } from "../../mongo/collections";

// interfaces
import { IInventory } from "../../interfaces/IInventory";

const inventoryResolver: IResolvers = {
  Query: {
    async getItems(root: void, args: void, context: { db: Db }) {
      try {
        return await context.db
          .collection(INVENTORY_COLLECTION)
          .find()
          .toArray();
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async createItem(root: void, args: any, context: { db: Db }) {
      try {
        const regexp = new RegExp(args.item.name, "i");
        const exist = await context.db
          .collection(INVENTORY_COLLECTION)
          .findOne({ name: regexp });
        if (exist) {
          return "Item already exists";
        }
        await context.db.collection(INVENTORY_COLLECTION).insertOne(args.item);
        return "Item created";
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default inventoryResolver;

import { Db } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";
import { EMPLOYEE_COLLECTION } from "../../mongo/collections";

const employeeResolver: IResolvers = {
  Query: {
    async getEmployees(root: void, args: void, context: { db: Db }) {
      try {
        return await context.db
          .collection(EMPLOYEE_COLLECTION)
          .find()
          .toArray();
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async createEmployee(root: void, args: any, context: { db: Db }) {
      try {
        await context.db
          .collection(EMPLOYEE_COLLECTION)
          .insertOne(args.employee);
      } catch (error) {
        console.log(error);
      }
      return "Employee created successfully";
    },
  },
};

export default employeeResolver;

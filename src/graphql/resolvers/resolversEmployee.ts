import { Db } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";
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
        const regexp = new RegExp(args.employee.name.identification, "i");
        const exist = await context.db
          .collection(EMPLOYEE_COLLECTION)
          .findOne({ name: regexp });
        if (exist) {
          return "Employee already exists";
        }
        await context.db
          .collection(EMPLOYEE_COLLECTION)
          .insertOne(args.employee);
      } catch (error) {}
      return "Employee created successfully";
    },
  },
};

export default employeeResolver;

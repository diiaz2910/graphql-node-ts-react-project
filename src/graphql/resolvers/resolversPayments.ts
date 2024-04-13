import { IResolvers } from "@graphql-tools/utils";

const paymentsResolvers: IResolvers = {
  Query: {
    hello() {
      return "Hello World!";
    },
    getPayments() {
      return [
        { id: 1, amount: 100, description: "Pagado" },
        { id: 2, amount: 100, description: "Pendiente" },
      ];
    },
  },
};

export default paymentsResolvers;
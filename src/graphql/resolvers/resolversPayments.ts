import { IResolvers } from "@graphql-tools/utils";

const paymentsResolver: IResolvers = {
  Query: {
    getPayments() {
      return [
        { id: 1, amount: 100, description: "Pagado" },
        { id: 2, amount: 100, description: "Pendiente" },
      ];
    },
  },
};

export default paymentsResolver;

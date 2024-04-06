import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  Query: {
    hello() {
      return "Hello World!";
    },
    getItems() {
      return [
        { id: 1, name: "Guadana", description: "Marca Stihl" },
        { id: 2, name: "Martillo", description: "Martillo de 1kg" },
      ];
    },
  },
};

export default resolvers;

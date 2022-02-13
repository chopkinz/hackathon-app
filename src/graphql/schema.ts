import { gql } from "apollo-server-micro";
const typeDefs = gql`
  type Animal {
    common_name: String!
    scientific_name: String
    latitude: Float
    longitude: Float
    status: String
    family: String
    order: String
    class: String
    phylum: String
    kingdom: String
    genus: String
    species: String
    image: String
    description: String
    diet: String
  }

  type Query {
    allAnimals: [Animal]!
    randomAnimal: Animal
    animal(scientificName: String): Animal
    test: File
  }
`;

export default typeDefs;

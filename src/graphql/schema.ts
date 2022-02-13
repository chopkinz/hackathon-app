import { gql } from "apollo-server-micro";
const typeDefs = gql`
  type Animal {
    common_name: String
    scientific_name: String!
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
  }

  type Query {
    allAnimals(skip: Int = 0, first: Int = 0): [Animal]!
    randomAnimal: Animal
    animal(scientificName: String): Animal
    animalCount: Int
    animalImages: [String]
  }
`;

export default typeDefs;

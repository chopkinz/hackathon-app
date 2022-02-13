import React, { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { Pagination } from "@mui/material";
import { ShowcaseItem } from "../components/Main/ShowcaseItem";
interface Animal {
  commonName: string;
  scientificName: string;
  longitude: string;
  latitude: string;
  status: string;
  family: string;
  order: string;
  class: string;
  phylum: string;
  kingdom: string;
  genus: string;
  species?: string;
  image: string;
}
const query = gql`
  query allAnimals($first: Int, $skip: Int) {
    allAnimals(first: $first, skip: $skip) {
      scientific_name
      common_name
      latitude
      longitude
      status
      family
      order
      class
      phylum
      kingdom
      genus
      species
      image
    }
  }
`;
//define a graphql query to get the animal count
const animalCountQuery = gql`
  query {
    animalCount
  }
`;

export default function Showcase() {
  const [dataLoading, setDataLoading] = useState(false);
  const [animals, setAnimals] = useState<Animal[]>([] as Animal[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [animalCount, setAnimalCount] = useState(0);
  const getAnimalCount = async () => {
    const response = await request("/api/graphql", animalCountQuery);
    setAnimalCount(response.animalCount);
  };
  const getData = async (pageNum: number = 1) => {
    request("/api/graphql", query, { first: 10, skip: (pageNum - 1) * 10 })
      .then((response) => {
        setAnimals(response.allAnimals);
        response.allAnimals.forEach((animal) => {
          if (animal.image) {
            console.log(animal.common_name);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const firstLoad = async () => {
    setDataLoading(true);
    Promise.all([getAnimalCount(), getData()]).then(() =>
      setDataLoading(false)
    );
  };
  useEffect(() => {
    firstLoad();
  }, []);
  if (dataLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {animals.map((animal) => {
        // console.log(animal);
        return <ShowcaseItem {...animal} />;
      })}
      <Pagination
        count={Math.ceil(animalCount / 10)}
        page={currentPage}
        onChange={(_event, value) => {
          setCurrentPage(value);
          getData(value);
        }}
      />
    </div>
  );
}

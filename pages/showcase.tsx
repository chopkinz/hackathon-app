import React, { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { Pagination } from "@mui/material";

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
  const [animals, setAnimals] = useState([]);
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
      {JSON.stringify(animals)}
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

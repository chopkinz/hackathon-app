import React, { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { Grid, Pagination } from "@mui/material";
import { ShowcaseItem } from "../components/Main/ShowcaseItem";
import Mapbox from "../components/Main/Mapbox";
interface Animal {
  common_name: string;
  scientific_name: string;
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
  const [coords, setCoords] = useState([0, 0]);
  const getAnimalCount = async () => {
    const response = await request("/api/graphql", animalCountQuery);
    setAnimalCount(response.animalCount);
  };
  const getData = async (pageNum: number = 1) => {
    request("/api/graphql", query, { first: 10, skip: (pageNum - 1) * 10 })
      .then((response) => {
        setAnimals(response.allAnimals);
        setCoords([
          response.allAnimals[0].latitude,
          response.allAnimals[0].longitude,
        ]);
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
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {coords}
        <Grid container spacing={2}>
          {animals.map((animal) => {
            return (
              <Grid
                item
                xs={12}
                onClick={() => {
                  console.log(animal);
                  setCoords([
                    parseFloat(animal.longitude),
                    parseFloat(animal.latitude),
                  ]);
                }}
              >
                <ShowcaseItem {...animal} />
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          count={Math.ceil(animalCount / 10)}
          page={currentPage}
          onChange={(_event, value) => {
            setCurrentPage(value);
            getData(value);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Mapbox coords={coords} />
      </Grid>
    </Grid>
  );
}

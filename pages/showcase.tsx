import React, { useEffect, useState } from "react";
import { request, gql } from "graphql-request";

const query = gql`
  query {
    allAnimals {
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

export default function Showcase() {
  const [dataLoading, setDataLoading] = useState(false);
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    //request query and set animals to response.data.allAnimals
    setDataLoading(true);
    request("/api/graphql", query)
      .then((response) => {
        setAnimals(response.allAnimals);
        setDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setDataLoading(false);
      });
  });
  return <div>{JSON.stringify(animals)}</div>;
}

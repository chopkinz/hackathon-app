import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, IconButton, Typography, Button } from "@mui/material";

interface Props {
  common_name: string;
  scientific_name: string;
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

export const ShowcaseItem = (props: Props) => {
  const [trueStatus, setTrueStatus] = useState()

  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t overflow-hidden">
    <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
      <img
        src={props.image}
        alt={props.common_name} 
        layout="fill" 
      />
      </div>

      <div className="flex flex-col pl-5">
        <div className="pt-2 text-sm text-gray-500 flex-grow">
          {props.common_name}
       
        <div className="italic text-xl text-black">
          {props.scientific_name}
        </div>
        <p className="text-left font-extralight pt-4">{props.status == "Extant (resident)" ? "Endangered" : "Extinct"}</p>
        </div>
        <br/>
        <div className="flex justify-between items-end pt-5">
        
        </div>
        <div className="items-center">
      <button color="primary" className="button">Purchase</button></div>
      </div>
  </div>
  );
};


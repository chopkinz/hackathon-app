/* eslint-disable @next/next/no-img-element */
import { Link } from "@mui/material";
import { useRouter } from "next/router";
import Scroll from "../Scroll"

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
  const router = useRouter();

  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t overflow-hidden">
    <div className="relative h-full w-full md:h-52 md:w-80 flex-shrink-0 aspect-w-16">
      <img
        src={props.image}
        alt={props.common_name} 
      />
    </div>

      <div className="flex flex-col pl-5">
        <div className="pt-2 text-sm text-gray-500 flex-grow">
          {props.common_name}
       
        <div className="italic text-xl text-black">
          {props.scientific_name}
        </div>
        <p className="text-left font-extralight pt-4">{props.status == "Extant (resident)" ? "Endangered" : "Extinct"}</p>
        <hr className={`border-2 w-20 ${props.status == "Extant (resident)" ? "border-red-600" : "border-slate-600"}`}/>
        </div>
        <br/>
        <div className="flex justify-between items-end pt-5">
        
        </div>
        <div className="items-center">
          <Link>
            <a href="https://thirdweb.com/rinkeby/0x76643274F1e0688b8C07f46aE185607429903F94/marketplace/0x95Bd8ED5E39a35F98D7487edf2796f3A106566cb">
              <button color="primary" className="button">{props.status == "Extant (resident)" ? "Sponsor" : "F In Chat"}</button>
            </a>
          </Link>
      </div>
      <Scroll />
  </div>
  </div>
  );
};


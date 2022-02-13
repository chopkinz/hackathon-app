import axios from "axios";

const options = {
  method: "POST",
  url: "https://socialanimal.p.rapidapi.com/api/v1/search",
  headers: {
    "x-rapidapi-host": "socialanimal.p.rapidapi.com",
    "x-rapidapi-key": "14d28dc29emshea1c4806b859341p165647jsn1f7d23569338",
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

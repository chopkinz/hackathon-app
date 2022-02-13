import { Prisma, PrismaClient } from "@prisma/client";
import { XMLParser, XMLBuilder, XMLValidator } from "fast-xml-parser";
const urlMapping = require("./fileExports/file.json");
import fs from "fs";

const prisma = new PrismaClient({
  log: ["info", "warn", "error"],
});

async function main() {
  fs.readFile("./prisma/fileExports/mammals.xml", (err, data) => {
    const parser = new XMLParser();
    let jsonObj = parser.parse(data);

    let animalData: any[] = jsonObj.kml.Document.Folder.Placemark;
    // @ts-ignore
    const mapped: Prisma.AnimalCreateManyInput = animalData.map((item) => {
      let animalType = "";
      if (item.ExtendedData.SchemaData.SimpleData[23] === true) {
        animalType = "marine";
      } else if (item.ExtendedData.SchemaData.SimpleData[24] === true) {
        animalType = "terrestial";
      } else {
        animalType = "freshwater";
      }
      const animalObj = urlMapping.filter((map: { sn: any }) => {
        return map.sn == item.ExtendedData.SchemaData.SimpleData[1];
      })[0];

      return {
        scientific_name: item.ExtendedData.SchemaData.SimpleData[1],
        common_name: animalObj?.cn || null,
        kingdom: item.ExtendedData.SchemaData.SimpleData[16],
        genus: item.ExtendedData.SchemaData.SimpleData[21],
        family: item.ExtendedData.SchemaData.SimpleData[20],
        latitude: Number.parseFloat(
          animalData[0].Polygon.outerBoundaryIs.LinearRing.coordinates.split(
            ","
          )[0]
        ),
        longitude: Number.parseFloat(
          animalData[0].Polygon.outerBoundaryIs.LinearRing.coordinates.split(
            ","
          )[1]
        ),
        order: item.ExtendedData.SchemaData.SimpleData[19],
        phylum: item.ExtendedData.SchemaData.SimpleData[17],
        status: item.ExtendedData.SchemaData.SimpleData[15],
        type: animalType,
        image: animalObj?.im || null,
      };
    });

    (async () => {
      await prisma.animal.createMany({
        data: mapped,
        skipDuplicates: true,
      });
    })();
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { Prisma, PrismaClient } from '@prisma/client';
import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser'
import fs from 'fs'


const prisma = new PrismaClient({
  log: ['info', 'warn', 'error'],
});

async function main() {
  fs.readFile('./prisma/58.xml', ((err, data) => {
    const parser = new XMLParser();
    let jsonObj = parser.parse(data);
    console.log(jsonObj);

    let animalData = jsonObj.kml.Document.Placemark.ExtendedData.SchemaData.SimpleData;

   (async () => {
     await prisma.animal.create({
       data: {
         scientific_name: animalData[1],
         common_name: 'none found',
         kingdom: animalData[16],
         genus: animalData[21],
         family: animalData[22],
         latitude: undefined,
         longitude: undefined,
         order: animalData[19],
         phylum: animalData[17],
         status: animalData[15],
         type: 'not implemented'
       }
     })
   })()

  }))

}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
-- AlterTable
ALTER TABLE "Animal" ADD COLUMN     "class" TEXT,
ADD COLUMN     "family" TEXT,
ADD COLUMN     "genus" TEXT,
ADD COLUMN     "kingdom" TEXT,
ADD COLUMN     "order" TEXT,
ADD COLUMN     "phylum" TEXT,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "common_name" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

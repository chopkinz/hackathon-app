-- CreateTable
CREATE TABLE "Animal" (
    "scientific_name" TEXT NOT NULL,
    "common_name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("scientific_name")
);

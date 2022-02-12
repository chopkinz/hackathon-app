import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home({ animalData }) {
  console.log(animalData);
  return (
    <div className="py-0 px-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Endangered Species</h1>
        <div>hello</div>

        {/* {animalData.map((data, _index) => (
          <div key={_index}>
            <p>{data.name}</p>
          </div>
        ))}  */}

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  );
}

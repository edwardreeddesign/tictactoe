import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Board from "../elements/Board";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name='Tic Tac Toe game ' content='Edward Reed Designs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Board />
      </main>
    </div>
  );
};

export default Home;

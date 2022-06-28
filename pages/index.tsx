import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Tailwind Mock</title>
                <meta
                    name="description"
                    content="Learn tailwind by copying its landing page"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-3xl font-bold underline text-center p-2 bg-lime-200">
                The goal of this project is to learn tailwind by fake copying
            </h1>
            <Header />

            <main></main>

            <footer className="mt-6"></footer>
        </div>
    );
};

export default Home

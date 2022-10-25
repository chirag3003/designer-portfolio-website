import Head from 'next/head'
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import React from "react";

export default function Home() {
    return (<>
            <Head>
                <title>Designer`&apos;`s Website</title>
                <meta name="description" content="A website made fro designer's"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Navbar/>
                <Carousel/>
                <Gallery/>
            </main>
        </>)
}

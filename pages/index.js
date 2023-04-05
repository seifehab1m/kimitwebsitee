import Head from "next/head";
import { useEffect } from "react";
import About from "../Components/About/About";
import Academy from "../Components/Academy/Academy";
import Contact from "../Components/ContactUs/Contact";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Navbar from "../Components/navbar/Navbar";
import Services from "../Components/Services/Services";
import Software from "../Components/Software/Software";
import Testmonial from "../Components/Testmonial/Testmonial";
import { fetchHomepage } from "../services";

export default function HomePage({ cms }) {
  const {
    Hero,
    WhatWeOffer,
    AboutKimit,
    KimitSoftware,
    KimitAcademy,
    Testimonials,
  } = cms.attributes;

  console.log(Hero)
  return (
    <>
      <Head>
        <title>Kimit</title>
        <meta name="description" content="...." />
      </Head>
      <Navbar page={"home"} />
      <Home />
      <Services setBg={"dark"} cms_data={WhatWeOffer}/>
      <About cms_data={AboutKimit}/>
      <Software cms_data={KimitSoftware}/>
      <Academy cms_data={KimitAcademy}/>
      <Testmonial cms_data={Testimonials}/>
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data: cms } = await fetchHomepage();
  console.log(cms);
  return {
    props: {
      cms,
    },
  };
}

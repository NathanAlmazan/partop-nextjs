import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

//components
const Navbar = dynamic(() => import("../src/layouts/Navbar"));
const HeroContainer = dynamic(() => import("../src/components/home/HeroContainer"));
const DescriptionContainer = dynamic(() => import("../src/components/home/DescContainer"));
const GalleryContainer = dynamic(() => import("../src/components/home/Gallery"));
const FeedbackContainer = dynamic(() => import("../src/components/home/FeedbackContainer"));
const CredentialContainer = dynamic(() => import("../src/components/home/Credentials"));
const OwnerProfile = dynamic(() => import("../src/components/home/OwnerProfile"));
const FooterContainer = dynamic(() => import("../src/components/Footer"));


export default function HomePage() {
  return (
    <>
      <Head>
        <title>PARTOP HEAVY EQUIPMENT PARTS TRADING</title>
      </Head>
      <Navbar />
      <HeroContainer />
      <DescriptionContainer />
      <GalleryContainer />
      <FeedbackContainer />
      <CredentialContainer />
      <OwnerProfile />
      <FooterContainer />
    </>
  )
}
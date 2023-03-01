import Head from "next/head";
import dynamic from "next/dynamic";

import Hero from "../components/hero";
import Feature2 from "../components/feature2";
import Feature3 from "../components/feature3";
import Feature4 from "../components/feature4";
import YoutubeEmbed from "../components/viewport";
// import Feature4 from "../components/feature4";

const FeatureWithNoSSR = dynamic(() => import("../components/feature"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/24030131.js" />
      </Head>
      <Hero />
      <FeatureWithNoSSR />
      <YoutubeEmbed playerId="gIx2F0o2jWQ" />
      <Feature2 />
      <Feature3 />
      <YoutubeEmbed playerId="7TtInjRSQ6A" />
      <Feature4 />
    </>
  );
}

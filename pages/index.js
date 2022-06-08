import Hero from "../components/hero";
import Feature from "../components/feature";
import Feature2 from "../components/feature2";
import Feature3 from "../components/feature3";
import YoutubeEmbed from "../components/viewport";
import Feature4 from "../components/feature4";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <YoutubeEmbed playerId="gIx2F0o2jWQ" />
      <Feature2 />
      <Feature3 />
      <Feature4 />
    </>
  );
}

// import { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import useSWR from "swr";

import PageHeader from "../components/pageHeader";
import Highlight from "../components/highlight";
import BigCard from "../components/bigCard";
import Others from "../components/others";
import Pagination from "../components/pagination";

const fetcher = (url) => fetch(url).then((result) => result.json());

export default function Advise() {
  const { data, error } = useSWR("http://192.168.2.21:8041/web/highlighted-contents", fetcher);
  // const [highlightedData, setHighlightedData] = useState([]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Box px={{ base: 4, md: 12, "2xl": "15rem" }}>
      <PageHeader />
      <Highlight />
      <SimpleGrid spacing={10} columns={3}>
        <BigCard />
        <BigCard />
        <BigCard />
      </SimpleGrid>
      <Others />
      <SimpleGrid spacing={10} columns={3}>
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
      </SimpleGrid>
      <Pagination />
    </Box>
  );
}

import { Box, SimpleGrid } from "@chakra-ui/react";

import PageHeader from "../components/pageHeader";
import Highlight from "../components/highlight";
import BigCard from "../components/bigCard";
import Others from "../components/others";
import Pagination from "../components/pagination";

export default function Advise() {
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

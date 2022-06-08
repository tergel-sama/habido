import { Box } from "@chakra-ui/react";

import PageHeader from "../components/pageHeader";
import Highlight from "../components/highlight";

export default function Advise() {
  return (
    <Box px={{ base: 4, md: 12, "2xl": "15rem" }}>
      <PageHeader />
      <Highlight />
    </Box>
  );
}

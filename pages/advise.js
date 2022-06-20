import { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import useSWR from "swr";

import PageHeader from "../components/pageHeader";
import Highlight from "../components/highlight";
import BigCard from "../components/bigCard";
import Others from "../components/others";
import Pagination from "../components/pagination";

const fetcher = (url) => fetch(url).then((result) => result.json());

export default function Advise() {
  const [pag, setPag] = useState(1);
  const [isHighlight, setHighlight] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { data: highlightData, error } = useSWR("http://192.168.2.21:8041/web/highlighted-contents", fetcher);
  const { data: contents } = useSWR(
    `http://192.168.2.21:8041/web/contents?SearchText=${searchText}&Pid=${pag}&Psize=6`,
    fetcher
  );
  const { data: tags } = useSWR("http://192.168.2.21:8041/web/content/tags", fetcher);

  if (error) return <div>failed to load</div>;
  if (!highlightData) return <div>loading...</div>;

  return (
    <Box px={{ base: 4, md: 12, "2xl": "15rem" }}>
      <PageHeader setSearchText={setSearchText} tags={tags} />
      {searchText === "" ? (
        <>
          <Highlight isHighlight={isHighlight} setHighlight={setHighlight} number={highlightData.length} />
          <SimpleGrid spacing={10} columns={3}>
            {isHighlight
              ? highlightData.map((item, index) => <BigCard key={index} data={item} />)
              : highlightData.slice(0, 3).map((item, index) => <BigCard key={index} data={item} />)}
          </SimpleGrid>
          <Others size={contents?.rowCount} />
        </>
      ) : null}
      <SimpleGrid spacing={10} columns={3}>
        {contents?.results.map((item, index) => (
          <BigCard key={index} data={item} />
        ))}
      </SimpleGrid>
      <Pagination onChangePag={setPag} current={pag} size={contents?.pageCount} />
    </Box>
  );
}

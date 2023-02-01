import { Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"}>
      <Heading mt={{ base: "16", md: "0" }}>Statistics</Heading>
      <Image
        src={
          "https://github-profile-trophy.vercel.app/?username=rajbaghelrahul&theme=dark"
        }
      />
      {/* <Image
        src={
          "https://github-readme-streak-stats.herokuapp.com/?user=rajbaghelrahul&theme=radical&custom_title=streak-stats&hide_border=true&layout=compact"
        }
      /> */}
      <Image
        src={
          "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=rajbaghelrahul&theme=dracula"
        }
      />
      <GitHubCalendar username="rajbaghelrahul" />
    </VStack>
  );
};

export default Statistics;

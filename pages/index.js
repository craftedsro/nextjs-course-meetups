import MetaHead from "../components/ui/MetaHead";
import MeetupList from "../components/meetups/MeetupList";
import { Box } from "@mui/material";
import { GetMeetupsCollection } from "../util/db";

const HomePage = (props) => {
  const title = "The News Page";
  const description = "Best news around";

  return (
    <>
      <MetaHead title={title} description={description} />

      <Box component="section">
        <h1>{title}</h1>
        <MeetupList meetups={props.meetups} />
      </Box>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const meetups = await GetMeetupsCollection();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
};

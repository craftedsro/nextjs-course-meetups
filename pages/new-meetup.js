import NewMeetupForm from "../components/meetups/NewMeetupForm";
import MetaHead from "../components/ui/MetaHead";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  const title = "Add New Meetup";
  const description = "Place to add your new meetup.";

  const addMeetupHandler = async (meetupData) => {
    const result = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meetupData),
    });

    console.log(result);

    await router.push("/");
  };

  return (
    <>
      <MetaHead title={title} description={description} />
      <Box component="section">
        <Typography
          variant="h4"
          color="text.primary"
          style={{ textAlign: "center" }}
        >
          {title}
        </Typography>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Box>
    </>
  );
};

export default NewMeetupPage;

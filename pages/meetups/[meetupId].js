import MetaHead from "../../components/ui/MetaHead";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { GetMeetup, GetMeetupsCollection } from "../../util/db";

const DetailPage = (props) => {
  const { title, description, address, image } = props.meetup;

  return (
    <>
      <MetaHead title={title} description={description} />

      <MeetupDetails
        title={title}
        image={image}
        address={address}
        description={description}
      />
    </>
  );
};

export default DetailPage;

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const meetup = await GetMeetup(meetupId);

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const meetups = await GetMeetupsCollection({}, { _id: 1 });

  const paths = meetups.map((meetup) => ({
    params: {
      meetupId: meetup._id.toString(),
    },
  }));

  return {
    fallback: "blocking",
    paths: paths,
  };
};

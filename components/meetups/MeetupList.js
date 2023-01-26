import MeetupItem from "./MeetupItem";
import { List } from "@mui/material";

const MeetupList = (props) => {
  return (
    <List>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </List>
  );
};

export default MeetupList;

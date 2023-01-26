import Image from "next/image";
import { Box, Typography } from "@mui/material";

const MeetupDetails = (props) => {
  const { title, image, address, description } = props;
  return (
    <Box component="article">
      <Box component="div" style={{ display: "block" }}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={300}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Typography variant="h4" component="div">
        {title}
      </Typography>
      <Typography variant="body">{address}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
};

export default MeetupDetails;

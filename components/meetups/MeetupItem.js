import Image from "next/image";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const MeetupItem = (props) => {
  const router = useRouter();
  const { id, title, image, address } = props;

  const showDetailsHandler = () => {
    router.push("/meetups/" + id);
  };

  return (
    <li key={id}>
      <Card sx={{ maxWidth: 600 }} style={{ marginBottom: 50 }}>
        <Image src={image} alt={title} width={600} height={300} />

        <CardContent>
          <Typography gutterBottom varian="h3" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={showDetailsHandler}>
            Show Details
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default MeetupItem;

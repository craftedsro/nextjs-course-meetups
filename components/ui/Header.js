import MainNavigation from "./MainNavigation";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "white" }}
        >
          Meetup Page
        </Typography>
        <MainNavigation />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

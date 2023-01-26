import Link from "next/link";
import { Box } from "@mui/material";

const navItems = [
  {
    name: "All Meetups",
    link: "/",
  },
  {
    name: "Add New Meetup",
    link: "/new-meetup",
  },
];
const MainNavigation = () => {
  return (
    <Box component="div">
      {navItems.map((item) => (
        <Link
          href={item.link}
          key={item.link}
          style={{ color: "white", marginRight: 10 }}
        >
          {item.name}
        </Link>
      ))}
    </Box>
  );
};

export default MainNavigation;

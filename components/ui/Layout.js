import Footer from "./Footer";
import Header from "./Header";
import { Box, Container, CssBaseline } from "@mui/material";

const Layout = (props) => {
  return (
    <Box style={{ height: "100vh" }}>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm" style={{ paddingTop: 90 }}>
        <Box component="main">{props.children}</Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;

import Footer from "./Footer";
import Header from "./Header";
import { Box, Container, CssBaseline } from "@mui/material";

const Layout = (props) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm" style={{ paddingTop: 90 }}>
        <Box component="main" style={{ height: "100vh" }}>
          {props.children}
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Layout;

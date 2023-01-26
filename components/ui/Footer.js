import Image from "next/image";
import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        borderTop: "1px solid #ddd",
        height: "60px",
        lineHeight: "60px",
        backgroundColor: "white",
      }}
    >
      <Box component="footer" style={{ textAlign: "center" }}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </Box>
    </Container>
  );
};

export default Footer;

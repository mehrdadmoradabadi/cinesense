import { Box, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import bgDark from "../assets/png/bg-dark.webp";
import bgLight from "../assets/png/bg-light.webp";

const Layout = () => {
  const { colorMode } = useColorMode();
  const backgroundImage = colorMode === "light" ? bgLight : bgDark;
  const showBackground = useBreakpointValue({ base: false, md: true });
  return (
    <>
      <Box
        position="relative"
        minHeight="100vh"
        overflow="hidden"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: showBackground ? `url(${backgroundImage})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          filter: "blur(3px)",
          zIndex: -1,
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0)",
          zIndex: -1,
        }}
      >
        <Navbar />
        <Box position="relative" zIndex={1} padding={10}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;

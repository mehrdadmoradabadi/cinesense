import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/svg/logo-no-background.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={5}>
      <Link to={"/"}>
        <Image src={logo} boxSize={20} objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

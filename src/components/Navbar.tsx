import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/svg/logo-no-background.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <HStack padding={5}>
      <Show above="lg">
        <Link to={"/"}>
          <Image src={logo} boxSize={20} objectFit={"contain"} />
        </Link>
      </Show>
      <Show below="md">
        <SideBar />
      </Show>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

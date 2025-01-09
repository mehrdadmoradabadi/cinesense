import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoHome } from "react-icons/io5";
import logo from "../assets/svg/logo-no-background.svg";
import GenreList from "./GenreList";

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<HamburgerIcon />}
        onClick={onOpen}
        variant="ghost"
        borderRadius={15}
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <HStack align="center" spacing={4}>
              <Image src={logo} boxSize={20} objectFit={"contain"} />
              <Text>Cinesense</Text>
            </HStack>
          </DrawerHeader>
          <Button as={Link} to="/" leftIcon={<IoHome />}>
            Home
          </Button>
          <DrawerBody paddingX={6} marginBottom={2}>
            <GenreList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default SideBar;

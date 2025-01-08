import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <SunIcon color={colorMode === "light" ? "gray.700" : "yellow.200"} />
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <MoonIcon color={colorMode === "light" ? "blue.500" : "gray.500"} />
    </HStack>
  );
};

export default ColorModeSwitch;

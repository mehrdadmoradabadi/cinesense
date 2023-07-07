import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useMovieQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "popularity.desc", label: "Popularity" },
    { value: "revenue.desc", label: "Revenue" },
    { value: "primary_release_date.desc", label: "Release Date" },
    { value: "vote_average.desc", label: "Vote" },
  ];
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);
  const sortOrder = useMovieQueryStore((s) => s.movieQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        OrderBy: {currentSortOrder?.label || "Popularity"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

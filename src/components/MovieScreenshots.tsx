import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  id: number;
}

const MovieScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreenShots(id);
  if (isLoading) return null;
  if (error) throw error;
  const screenshots = data?.backdrops.slice(0, 2);
  return (
    <SimpleGrid minChildWidth="120px" spacing={2} padding={2}>
      {screenshots?.map((screenshot) => (
        <Image
          key={screenshot.file_path}
          borderRadius={5}
          src={`https://image.tmdb.org/t/p/w500/${screenshot.file_path}`}
        />
      ))}
    </SimpleGrid>
  );
};

export default MovieScreenshots;

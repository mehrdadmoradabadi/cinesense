import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const ImdbScore = ({ score }: Props) => {
  const color = score > 8.5 ? "green" : score > 6.0 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={14} padding={2} borderRadius={4}>
      {score.toFixed(1)}
    </Badge>
  );
};

export default ImdbScore;

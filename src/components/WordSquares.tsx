import { Box, Flex } from "@mantine/core";

type WordSquaresProps = {
  letters: string[];
  status: "idle" | "success" | "error";
};

export const WordSquares = ({ letters, status }: WordSquaresProps) => {
  const borderColor =
    status === "idle" ? "gray" : status === "success" ? "green" : "red";

  return (
    <Flex gap="sm" align="center">
      {Array.from({ length: 6 }).map((_, i) => (
        <Box
          key={i}
          w={50}
          h={50}
          display="flex"
          style={{
            justifyContent: "center",
            border: "2px solid",
            borderColor,
            fontSize: 24,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          {letters[i] ?? ""}
        </Box>
      ))}
    </Flex>
  );
};

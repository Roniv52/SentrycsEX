import { useEffect, useState } from "react";
import { Flex } from "@mantine/core";
import { MyActionListener } from "../lib/MyActionListener";
import { WordSquares } from "../components/WordSquares";
import { Keyboard } from "../components/Keyboard";
import { checkIfRealWord } from "../lib/checkIfRealWord";

const actionListener = new MyActionListener();

const HomePage = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    actionListener.registerListener("CHAR", (char: string) => {
      setLetters((prev) => (prev.length < 6 ? [...prev, char] : prev));
    });

    actionListener.registerListener("BACKSPACE", () => {
      setLetters((prev) => prev.slice(0, -1));
    });

    actionListener.registerListener("ENTER", async () => {
      if (letters.length < 6) {
        setStatus("error");
        return;
      }

      const word = letters.join("").toLowerCase();
      const isRealWord = await checkIfRealWord(word);
      setStatus(isRealWord ? "success" : "error");
    });

    return () => {
      actionListener.removeListener("CHAR");
      actionListener.removeListener("BACKSPACE");
      actionListener.removeListener("ENTER");
    };
  }, [letters]);

  return (
    <Flex
      direction="column"
      align="center"
      gap="md"
      p="xl"
      justify="center"
      h="100%"
    >
      <WordSquares letters={letters} status={status} />
      <Keyboard actionListener={actionListener} />
    </Flex>
  );
};

export default HomePage;

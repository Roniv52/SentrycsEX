import { Button, Flex } from "@mantine/core";
import { MyActionListener } from "../lib/MyActionListener";
import { IconBackspace } from "@tabler/icons-react";

type KeyboardProps = {
  actionListener: MyActionListener;
};

export const Keyboard = ({ actionListener }: KeyboardProps) => {
  const row1 = "QWERTYUIOP".split("");
  const row2 = "ASDFGHJKL".split("");
  const row3 = "ZXCVBNM".split("");

  return (
    <Flex direction="column" w="100%" align="center">
      <Flex gap="xs" mb='-50px'>
        {row1.map((char) => (
          <Button
            key={char}
            onClick={() => actionListener.emit("CHAR", char)}
            size="md"
          >
            {char}
          </Button>
        ))}
      </Flex>

      <Flex gap="xs" mb='-50px'>
        {row2.map((char) => (
          <Button
            key={char}
            onClick={() => actionListener.emit("CHAR", char)}
            size="md"
          >
            {char}
          </Button>
        ))}
      </Flex>

      <Flex gap="xs">
        <Button onClick={() => actionListener.emit("ENTER", "")} size="md">
          ENTER
        </Button>

        {row3.map((char) => (
          <Button
            key={char}
            onClick={() => actionListener.emit("CHAR", char)}
            size="md"
          >
            {char}
          </Button>
        ))}

        <Button onClick={() => actionListener.emit("BACKSPACE", "")} size="md">
          <IconBackspace size={18} />
        </Button>
      </Flex>
    </Flex>
  );
};

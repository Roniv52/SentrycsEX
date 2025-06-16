import axios from "axios";

export const checkIfRealWord = async (word: string): Promise<boolean> => {
  try {
    await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return true;
  } catch {
    return false;
  }
};
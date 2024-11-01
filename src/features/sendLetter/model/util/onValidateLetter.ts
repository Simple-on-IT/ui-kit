import { errors } from "@/shared/const/errors";
import { Letter } from "../types/letterTypes";

export const onValidateLetter = (key: keyof Omit<Letter, 'error'>, value: string) => {
  switch (key) {
    case 'name': {
      if (value.length < 3) {
        return errors.wordLength;
      }
    }
  }
  return undefined;
}
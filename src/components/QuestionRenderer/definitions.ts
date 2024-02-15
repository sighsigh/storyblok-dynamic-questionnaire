import { AnswerOption, QuestionItem } from "@definitions/Questionnaire";
import { ChangeEventHandler } from "react";
import { FieldError } from "react-hook-form";

export type QuestionRendererProps = {
  title: string;
  required: boolean;
  identifier: string;
  options?: Array<AnswerOption>;
  error?: FieldError;
  onChangeNextPageUrl: (slug: string | undefined) => void;
} & (
  | {
      type:
        | QuestionItem.INPUT_EMAIL
        | QuestionItem.INPUT_NUMBER
        | QuestionItem.INPUT_TEXTAREA
        | QuestionItem.INPUT_TEXT;
      onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    }
  | {
      type: QuestionItem.SINGLE_CHOICE;
      onChange: (value: string) => void;
      options: Array<AnswerOption>;
    }
  | {
      type: QuestionItem.MULTI_CHOICE;
      onChange: (value: string[]) => void;
      options: Array<AnswerOption>;
    }
);

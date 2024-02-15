import { AnswerOption, QuestionItem } from "@definitions/Questionnaire";
import { getIdFromString } from "./strings";

type GetQuestionTypeParams =
  | {
      component: "question_choice";
      multiple?: boolean;
      type?: never;
    }
  | {
      component: "question_input";
      multiple?: never;
      type: QuestionItem;
    };

export const getQuestionType = ({
  component,
  ...params
}: GetQuestionTypeParams): QuestionItem => {
  if (component === "question_choice") {
    if (params.multiple) {
      return QuestionItem.MULTI_CHOICE;
    }
    return QuestionItem.SINGLE_CHOICE;
  }

  return params.type as QuestionItem;
};

type GetAnswerOptionsParams = {
  answers?: Array<{
    label: string;
    alt_next_page?: {
      cached_url: string;
    };
  }>;
};

export const getAnswerOptions = ({
  answers,
}: GetAnswerOptionsParams): AnswerOption[] => {
  if (!answers || answers.length === 0) {
    return [];
  }

  return answers.map((answer) => ({
    value: getIdFromString(answer.label),
    label: answer.label,
    alt_next_page: answer.alt_next_page?.cached_url,
  }));
};

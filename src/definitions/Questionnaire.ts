export enum QuestionItem {
  INPUT_TEXT = "text",
  INPUT_EMAIL = "email",
  INPUT_NUMBER = "number",
  INPUT_TEXTAREA = "textarea",
  SINGLE_CHOICE = "single",
  MULTI_CHOICE = "multi",
}

export type AnswerOption = {
  value: string;
  label: string;
  alt_next_page?: string;
};

export type OptionProps = {
  value: string;
  label: string;
};

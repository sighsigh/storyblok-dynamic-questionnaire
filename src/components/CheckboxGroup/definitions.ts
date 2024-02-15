import { OptionProps } from "@definitions/Questionnaire";

export type CheckboxGroupProps = {
  onChange: (value: string[]) => void;
  options: Array<OptionProps>;
};

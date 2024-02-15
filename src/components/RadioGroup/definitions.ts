import { OptionProps } from "@definitions/Questionnaire";

export type RadioGroupProps = {
  id: string;
  hasError: boolean;
  onChange: (value: OptionProps) => void;
  options: Array<OptionProps>;
};

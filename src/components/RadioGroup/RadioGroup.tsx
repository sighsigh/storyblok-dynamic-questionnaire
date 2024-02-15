import { RadioGroup as MuiRadioGroup, Radio } from "@mui/joy";
import { RadioGroupProps } from "./definitions";
import { useCallback } from "react";

const RadioGroup = ({ id, hasError, options, onChange }: RadioGroupProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const optionValue = e.target.value;
      const matchingOption = options.find((opt) => opt.value === optionValue);

      onChange(matchingOption!);
    },
    [onChange, options]
  );

  return (
    <MuiRadioGroup name={id} onChange={handleChange}>
      {options.map(({ value, label }) => {
        return (
          <Radio
            key={value}
            value={value}
            label={label}
            color={hasError ? "danger" : undefined}
          />
        );
      })}
    </MuiRadioGroup>
  );
};

export default RadioGroup;

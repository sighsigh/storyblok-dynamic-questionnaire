import { useMemo } from "react";
import { QuestionRendererProps } from "./definitions";
import { Box, FormControl, FormHelperText, Input, Textarea } from "@mui/joy";
import { QuestionItem } from "@definitions/Questionnaire";
import { CheckboxGroup } from "@components/CheckboxGroup";
import { RadioGroup } from "@components/RadioGroup";

const QuestionRenderer = ({
  type,
  title,
  required,
  identifier,
  options = [],
  onChange,
  onChangeNextPageUrl,
  error,
}: QuestionRendererProps): JSX.Element => {
  const hasError = useMemo(() => !!error, [error]);

  const QuestionTitle = useMemo(() => {
    return (
      <Box
        component="label"
        htmlFor={identifier}
        typography="body-md"
        mb={1}
        fontWeight="bold"
      >
        {required ? `${title} *` : title}
      </Box>
    );
  }, [identifier, required, title]);

  const HelperText = useMemo(() => {
    if (error?.type === "required") {
      return (
        <FormHelperText sx={{ color: "danger.500" }}>Required</FormHelperText>
      );
    }

    return <FormHelperText />;
  }, [error?.type]);

  switch (type) {
    case QuestionItem.INPUT_TEXT:
    case QuestionItem.INPUT_EMAIL:
    case QuestionItem.INPUT_NUMBER:
      return (
        <FormControl error={hasError}>
          {QuestionTitle}
          <Input
            size="lg"
            id={identifier}
            type={type}
            placeholder="Type in here…"
            onChange={onChange}
          />
          {HelperText}
        </FormControl>
      );
    case QuestionItem.INPUT_TEXTAREA:
      return (
        <FormControl error={hasError}>
          {QuestionTitle}
          <Textarea
            size="lg"
            id={identifier}
            minRows={3}
            placeholder="Type in here…"
            onChange={onChange}
          />
          {HelperText}
        </FormControl>
      );
    case QuestionItem.SINGLE_CHOICE:
      return (
        <FormControl error={hasError}>
          {QuestionTitle}
          <RadioGroup
            id={identifier}
            hasError={hasError}
            onChange={(radioOption) => {
              const matchingAnswer = options.find(
                (opt) => opt.value === radioOption.value
              );

              onChangeNextPageUrl(matchingAnswer?.alt_next_page);

              onChange(radioOption.label);
            }}
            options={options}
          />
          {HelperText}
        </FormControl>
      );
    case QuestionItem.MULTI_CHOICE:
      return (
        <FormControl error={hasError}>
          {QuestionTitle}
          <CheckboxGroup options={options} onChange={onChange} />
          {HelperText}
        </FormControl>
      );

    default:
      return <></>;
  }
};

export default QuestionRenderer;

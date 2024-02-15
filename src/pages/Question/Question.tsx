import { QuestionRenderer } from "@components/QuestionRenderer";
import { useQuestionnairePageSuspenseQuery } from "@generated/gql";
import { Box, Button, CircularProgress, Typography } from "@mui/joy";
import { BaseTemplate } from "@templates/Base";
import { getAnswerOptions, getQuestionType } from "@utils/questions";
import { Suspense, useCallback, useMemo, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { renderRichText } from "@storyblok/react";
import parse from "html-react-parser";

const PageContent = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { handleSubmit, control: formControl } = useForm();
  const [altNextPageUrl, setAltNextPageUrl] = useState<string>();

  const { data } = useQuestionnairePageSuspenseQuery({
    variables: { slug: pathname.substring(1) },
  });

  const { title, description, questions, next_page } = useMemo(
    () => data?.QuestionnairepageItems?.items?.[0]?.content || {},
    [data]
  );

  const onChangeNextPageUrl = useCallback((slug: string | undefined) => {
    // do something with field values
    setAltNextPageUrl(slug);
  }, []);

  const handleClickNext = useCallback(
    (fieldValues: FieldValues) => {
      // do something with field values
      navigate(
        `/${
          altNextPageUrl || next_page?.cachedUrl || "questionnaire/thank-you"
        }`
      );
      setAltNextPageUrl(undefined);
    },
    [navigate, altNextPageUrl, next_page]
  );

  return (
    <>
      <Box display="flex" flexDirection="column" gap={3}>
        <Typography level="h1">{title}</Typography>
        {description && (
          <Typography component="div">
            {parse(renderRichText(description))}
          </Typography>
        )}
        {questions.map((question: any) => {
          return (
            <Controller
              key={question._uid}
              control={formControl}
              name={question.title}
              shouldUnregister={true}
              rules={{
                required: question.required,
              }}
              render={({ field: { onChange }, fieldState: { error } }) => {
                return (
                  <QuestionRenderer
                    identifier={question.title}
                    title={question.title}
                    options={getAnswerOptions(question)}
                    type={getQuestionType(question)}
                    required={question.required}
                    onChange={onChange}
                    onChangeNextPageUrl={onChangeNextPageUrl}
                    error={error}
                  />
                );
              }}
            />
          );
        })}
      </Box>
      <Box textAlign="center">
        <Button
          size="lg"
          sx={{ mt: 6 }}
          onClick={handleSubmit(handleClickNext)}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default function Question() {
  return (
    <BaseTemplate>
      <Suspense
        fallback={
          <Box textAlign="center">
            <CircularProgress />
          </Box>
        }
      >
        <PageContent />
      </Suspense>
    </BaseTemplate>
  );
}

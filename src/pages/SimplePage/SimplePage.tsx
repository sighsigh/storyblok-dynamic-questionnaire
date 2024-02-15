import { useSimplePageSuspenseQuery } from "@generated/gql";
import { renderRichText } from "@storyblok/react";
import parse from "html-react-parser";
import { Box, Button, CircularProgress, Typography } from "@mui/joy";
import { BaseTemplate } from "@templates/Base";
import { Suspense, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SimplePageProps } from "./definitions";

const PageContent = ({ storyblokSlug, buttonText }: SimplePageProps) => {
  const navigate = useNavigate();

  const { data } = useSimplePageSuspenseQuery({
    variables: { slug: storyblokSlug },
  });

  const { title, description, next_page } = useMemo(
    () => data?.SimplepageItems?.items?.[0]?.content || {},
    [data]
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
      </Box>
      {buttonText && (
        <Box textAlign="center">
          <Button
            size="lg"
            sx={{ mt: 6 }}
            onClick={() => navigate(`/${next_page?.cachedUrl}`)}
          >
            {buttonText}
          </Button>
        </Box>
      )}
    </>
  );
};

export default function SimplePage(props: SimplePageProps) {
  return (
    <BaseTemplate>
      <Suspense
        fallback={
          <Box textAlign="center">
            <CircularProgress />
          </Box>
        }
      >
        <PageContent {...props} />
      </Suspense>
    </BaseTemplate>
  );
}

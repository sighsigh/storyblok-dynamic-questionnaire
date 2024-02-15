import { Box, Button, Typography } from "@mui/joy";
import { BaseTemplate } from "@templates/Base";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <BaseTemplate>
      <Typography level="h1">Homepage</Typography>
      <Box textAlign="center">
        <Button
          size="lg"
          sx={{ mt: 6 }}
          onClick={() => navigate(`/questionnaire/start`)}
        >
          Go to Questionnaire
        </Button>
      </Box>
    </BaseTemplate>
  );
}

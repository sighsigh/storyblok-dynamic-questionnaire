import { Sheet, Typography } from "@mui/joy";

export default function Navbar() {
  return (
    <Sheet color="primary" variant="solid" sx={{ padding: 3 }}>
      <Typography sx={{ color: "white" }}>
        Dynamic Questionnaire with Storyblok
      </Typography>
    </Sheet>
  );
}

import { Navbar } from "@components/Navbar";
import { Container } from "@mui/joy";
import { BaseTemplateProps } from "./definitions";

export default function BaseTemplate({ children }: BaseTemplateProps) {
  return (
    <Container maxWidth="sm" disableGutters>
      <Navbar />
      <Container disableGutters sx={{ paddingX: 2, paddingY: 4 }}>
        {children}
      </Container>
    </Container>
  );
}

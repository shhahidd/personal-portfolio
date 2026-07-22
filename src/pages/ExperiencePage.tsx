import Experience from "../components/Content/Experience";
import BasePage from "../components/Page/BasePage";
import { Helmet } from "react-helmet-async";

export default function ExperiencePage() {

  return (
    <BasePage>
      <Helmet>
        <title>Experience | Shahid Patel</title>
        <meta name="description" content="Professional experience of Shahid Patel including software engineering internship and freelance web development work." />
      </Helmet>
      <Experience />
    </BasePage>
  );
}

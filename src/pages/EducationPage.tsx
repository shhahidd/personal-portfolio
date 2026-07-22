import Education from "../components/Content/Education";
import BasePage from "../components/Page/BasePage";
import { Helmet } from "react-helmet-async";

export default function EducationPage() {

  return (
    <BasePage>
      <Helmet>
        <title>Education | Shahid Patel</title>
        <meta name="description" content="Educational background of Shahid Patel, aspiring full-stack software developer." />
      </Helmet>
      <Education />
    </BasePage>
  );
}

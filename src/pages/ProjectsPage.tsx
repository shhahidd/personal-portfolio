import Projects from "../components/Content/Projects";
import BasePage from "../components/Page/BasePage";
import { Helmet } from "react-helmet-async";

export default function ProjectsPage() {

  return (
    <BasePage>
      <Helmet>
        <title>Projects | Shahid Patel</title>
        <meta name="description" content="Explore projects by Shahid Patel including Vehicle Number Plate Detection (YOLOv11), BiteRite AI Nutrition Planner, and more full-stack builds." />
      </Helmet>
      <Projects />
    </BasePage>
  );
}

import Contacts from "../components/Content/Contacts";
import BasePage from "../components/Page/BasePage";
import { Helmet } from "react-helmet-async";

export default function ContactsPage() {
  return (
    <BasePage>
      <Helmet>
        <title>Contact Shahid Patel | Full Stack Developer</title>
        <meta name="description" content="Get in touch with Shahid Patel for full-stack development opportunities, freelance web projects, or collaboration." />
      </Helmet>
      <Contacts />
    </BasePage>
  );
}

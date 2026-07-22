import BasePage from "../components/Page/BasePage";
import { motion } from "motion/react";
import { Button } from "@barrelrolla/react-components-library";
import { resumeContent, personalInfo } from "../data/content";
import resumeImage from "../assets/ShahidPatel.jpg";
import { Helmet } from "react-helmet-async";

export default function ResumePage() {
  return (
    <BasePage>
      <Helmet>
        <title>Resume | Shahid Patel</title>
        <meta name="description" content="View and download the resume of Shahid Patel, an aspiring full-stack developer skilled in React, Node.js, and Python." />
      </Helmet>
      <motion.section
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">{resumeContent.title}</h1>
            <p className="text-sm opacity-60 mt-1">
              {resumeContent.subtitle}
            </p>
          </div>
          <Button
            as={"a"}
            href={resumeContent.downloadUrl}
            download={`${personalInfo.fullName.replace(/\s+/g, "")}_Resume.pdf`}
          >
            {resumeContent.downloadCta}
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mx-auto w-full max-w-4xl"
        >
          <img
            src={resumeImage}
            alt={`${personalInfo.fullName} Resume`}
            className="w-full rounded-2xl border border-white/10 shadow-2xl"
            draggable={false}
          />
        </motion.div>
      </motion.section>
    </BasePage>
  );
}

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import {
  Button,
  Card,
  CardImageContainer,
  GitHubIcon,
  RocketIcon,
  Spinner,
  useTheme,
} from "@barrelrolla/react-components-library";
import BasePage from "../components/Page/BasePage";
import { getBioData } from "../util/dataHelper";
import { BioCategory, BioDataType } from "../data/bio";
import NotFoundContent from "../components/Page/NotFoundContent";
import { motion } from "motion/react";

export default function DetailsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<BioDataType | undefined>(undefined);
  const { id } = useParams();
  const location = useLocation();
  const theme = useTheme();

  useEffect(() => {
    const foundData = getBioData(
      id || "",
      location.pathname.split("/")[1] as BioCategory,
    );
    setData(foundData);
    if (foundData) {
      document.title = `Shahid Patel | ${foundData.title}`;
      const image = new Image();
      image.onload = () => {
        setLoading(false);
      };
      image.src =
        theme?.isDark && foundData.imgDark ? foundData.imgDark : foundData.img;
    } else {
      document.title = "Shahid Patel | Not Found";
      setLoading(false);
    }
  }, [id, location.pathname, theme]);

  if (loading) {
    return (
      <BasePage>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Spinner className="mx-auto mt-20 text-9xl" strokeWidth={4} />
        </motion.div>
      </BasePage>
    );
  }

  return (
    <BasePage>
      {!data && <NotFoundContent title="Content" />}
      {data && (
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="mt-6 flex flex-col items-center"
        >
          <Card containerClasses="border-transparent mb-6">
            <CardImageContainer
              style={{ backgroundColor: data.bgColor || "#000" }}
            >
              <img
                className={data.imgClass}
                src={theme?.isDark && data.imgDark ? data.imgDark : data.img}
                alt={`${data.title} logo`}
              />
            </CardImageContainer>
          </Card>
          <h1 className="text-2xl space font-medium">{data.title}</h1>
          {data.specialty && (
            <p className="font-normal pb-4">{data.specialty}</p>
          )}
          {data.dates && <p>{data.dates}</p>}
          <p
            dangerouslySetInnerHTML={{ __html: data.fullInfo }}
            className="my-5 max-w-[48rem] whitespace-pre-line list-disc"
          />
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            {data.website && (
              <Button
                as="a"
                href={data.website}
                target="_blank"
                startIcon={<RocketIcon strokeWidth={16} />}
              >
                Live
              </Button>
            )}
            {data.github && (
              <Button
                as="a"
                href={data.github}
                target="_blank"
                startIcon={<GitHubIcon strokeWidth={16} />}
              >
                Repo
              </Button>
            )}
            {/*data.certificate && (
              <Button
                as={Link}
                to={`/certificate/${data.id}`}
              >
                View Certificate
              </Button>
            )*/}
          </div>
        </motion.div>
      )}
    </BasePage>
  );
}

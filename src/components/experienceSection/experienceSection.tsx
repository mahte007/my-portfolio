import CustomTitle from "../common/customTitle/customTitle";
import TimelineCard from "../common/timelineCard/timelineCard";
import educationIcon from "/public/education.svg";
import workIcon from "/public/work.svg";
import download from "/public/download.svg";
import * as styles from "./experienceSection.css";
import Button from "../common/button/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import clsx from "clsx";

const work = [
  {
    id: "kanizsatel",
    company: "Kanizsatel Kft.",
    time: "Summer of 2017",
    title: "Telecommunaction Intern",
  },
  {
    id: "ferling",
    company: "FERLING Kft.",
    time: "Oct 2022 - Jan 2023",
    title: "Web Developer Intern",
  },
  {
    id: "arteries",
    company: "Arteries Studio",
    time: "2023 - 2024",
    title: "Frontend Developer",
  },
  {
    id: "amelco",
    company: "Amelco UK",
    time: "2024 - 2025",
    title: "Frontend Developer",
  },
];

const education = [
  {
    id: "highSchool",
    school: "Cserháti Sándor Technikum",
    time: "2016 - 2020",
    major: "Telecommunication",
  },
  {
    id: "university",
    school: "University of Pécs",
    time: "2020",
    major: "Computer Science Engineer BSc",
  },
];

export default function ExperienceSection() {
  const CV = "/files/MateHorvathCV.pdf";
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = useCallback(() => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  }, []);

  return (
    <section className={styles.experienceSectionContainer}>
      <CustomTitle
        subTitle="Education"
        heading="h2"
        position="center"
        subTitlePosition="above"
      >
        Work Experience
      </CustomTitle>
      <div className={styles.mainContainer}>
        <TimelineCard
          content={education}
          cardTitle="Education"
          titleIcon={educationIcon}
        />
        <TimelineCard content={work} cardTitle="Work" titleIcon={workIcon} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button variant="outline" href={CV} target="_blank" link>
          Check My CV
        </Button>
        <motion.a
          className={clsx(downloaded && "pointer-events-none")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          href={CV}
          download
          onClick={handleDownload}
        >
          <Image alt="downloadButton" src={download} width={25} height={25} />
        </motion.a>
      </div>
    </section>
  );
}

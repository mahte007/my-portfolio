import ImageCard from "../common/imageCard/imageCard";
import CustomTitle from "../common/customTitle/customTitle";

import { projects } from "../../data/projects";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("ProjectsSection");

  return (
    <section id="projects" className="mb-14 mt-16">
      <CustomTitle
        subTitle={t("subTitle")}
        heading="h2"
        position="center"
        subTitlePosition="above"
      >
        {t("title")}
      </CustomTitle>
      <div className="flex justify-center w-full mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ImageCard
              key={i}
              image={p.imageLink}
              buttonText={t(`projects.${p.id}.${p.buttonTextKey}`)}
              title={t(`projects.${p.id}.${p.titleKey}`)}
              href={p.link}
              tags={p.tags}
            >
              {t(`projects.${p.id}.${p.descKey}`)}
            </ImageCard>
          ))}
        </div>
      </div>
    </section>
  );
}

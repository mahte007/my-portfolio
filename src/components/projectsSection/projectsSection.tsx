"use client";

import CustomTitle from "../common/customTitle/customTitle";

import { projects } from "../../data/projects";
import { useLocale, useTranslations } from "next-intl";
import ShowcaseBlock from "../common/showcaseBlock/showcaseBlock";

export default function ProjectsSection() {
  const t = useTranslations("ProjectsSection");
  const locale = useLocale();

  return (
    <section id="projects" className="mb-14 mt-16">
      <CustomTitle
        subTitle={t("subTitle")}
        heading="h2"
        position="left"
        subTitlePosition="above"
        eyebrow
      >
        {t("title")}
      </CustomTitle>
      <div className="flex justify-center w-full mt-16">
        <div className="flex flex-col gap-32 lg:gap-16">
        {projects.map((p, i) => (
        <ShowcaseBlock key={p.id} index={i + 1} title={t(`projects.${p.id}.${p.titleKey}`)} image={p.imageLink} githubHref={p.githubHref} caseStudyHref={`/${locale}/projects/${p.id}`} tags={p.tags} reversed={p.reversed}>
          {t(`projects.${p.id}.${p.descKey}`)}
        </ShowcaseBlock>
        ))}
        </div>
      </div>
    </section>
  );
}

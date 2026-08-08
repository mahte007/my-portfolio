"use client";

import Image from "next/image";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import OrbBackground from "@/components/common/orbs/orbs";
import Button from "@/components/common/button/button";
import type { Project } from "@/data/projects";
import * as styles from "./caseStudy.css";

type Challenge = {
  title: string;
  description: string;
};

type CaseStudyViewProps = {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
};

export default function CaseStudyView({
  project,
  prevProject,
  nextProject,
}: CaseStudyViewProps) {
  const locale = useLocale();
  const t = useTranslations(`ProjectsSection.projects.${project.id}`);
  const tCommon = useTranslations("CaseStudy");
  const tAll = useTranslations();

  const overview = t.raw("overview") as string[];
  const highlights = t.raw("highlights") as string[];
  const challenges = t.raw("challenges") as Challenge[];

  return (
    <div
      id="home"
      style={{
        background:
          "linear-gradient(180deg, #040a11 0%, #1b0a2a 50%, #040a11 100%)",
      }}
      className="relative min-h-screen text-gray-200 antialiased"
    >
      <OrbBackground />
      <Header />
      <div className="max-w-7xl mx-auto p-6 pt-0 lg:p-12 lg:pt-0 z-10">
        <main className={`z-10 relative ${styles.wrapper}`}>
          <NextLink href={`/${locale}#projects`} className={styles.backLink}>
            <ArrowLeft size={16} /> {tCommon("backToProjects")}
          </NextLink>

          <section className={styles.hero}>
            <p className={styles.eyebrow}>{tCommon("eyebrow")}</p>
            <h1 className={styles.title}>{t("title")}</h1>
            <p className={styles.tagline}>{t("tagline")}</p>

            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>{tCommon("role")}</span>
                <span className={styles.metaValue}>{t("role")}</span>
              </div>
            </div>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              {project.liveHref && (
                <Button
                  variant="primary"
                  link
                  href={project.liveHref}
                  target="_blank"
                  className={styles.linkButton}
                >
                  {tCommon("liveDemo")} <ArrowUpRight size={16} />
                </Button>
              )}
              <Button
                variant="outline"
                link
                href={project.githubHref}
                target="_blank"
                className={styles.linkButton}
              >
                {tCommon("viewOnGithub")} <ArrowUpRight size={16} />
              </Button>
            </div>
          </section>

          <div className={styles.imageWrapper}>
            <Image
              alt={t("title")}
              src={project.imageLink}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className={styles.image}
              priority
            />
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{tCommon("overview")}</h2>
            {overview.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{tCommon("keyHighlights")}</h2>
            <div className={styles.highlightsGrid}>
              {highlights.map((highlight, i) => (
                <div key={i} className={styles.highlightCard}>
                  <CheckCircle2 size={18} className={styles.highlightIcon} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{tCommon("challenges")}</h2>
            <div className={styles.challengesList}>
              {challenges.map((challenge, i) => (
                <div key={i} className={styles.challengeCard}>
                  <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                  <p className={styles.challengeDescription}>
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {(prevProject || nextProject) && (
            <nav className={styles.projectNav}>
              {prevProject && (
                <NextLink
                  href={`/${locale}/projects/${prevProject.id}`}
                  className={styles.navLink}
                >
                  <ArrowLeft size={18} />
                  <span>
                    <span className={styles.navLabel}>
                      {tCommon("previousProject")}
                    </span>
                    <span className={styles.navTitle}>
                      {tAll(
                        `ProjectsSection.projects.${prevProject.id}.${prevProject.titleKey}`
                      )}
                    </span>
                  </span>
                </NextLink>
              )}
              {nextProject && (
                <NextLink
                  href={`/${locale}/projects/${nextProject.id}`}
                  className={`${styles.navLink} ${styles.navLinkNext}`}
                >
                  <span>
                    <span className={styles.navLabel}>
                      {tCommon("nextProject")}
                    </span>
                    <span className={styles.navTitle}>
                      {tAll(
                        `ProjectsSection.projects.${nextProject.id}.${nextProject.titleKey}`
                      )}
                    </span>
                  </span>
                  <ArrowRight size={18} />
                </NextLink>
              )}
            </nav>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

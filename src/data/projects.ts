export type Project = {
  id: string;
  titleKey: string;
  descKey: string;
  tags: string[];
  imageLink: string;
  githubHref: string;
  liveHref?: string;
  reversed: boolean;
};

export const projects: Project[] = [
  {
    id: "meetingRoomManager",
    titleKey: "title",
    descKey: "description",
    tags: ["React", "TypeScript", "Next.js", "Spring Boot", "PostgreSQL"],
    imageLink: "/PWA_Dashboard.webp",
    githubHref: "https://github.com/mahte007/meeting-room-pwa",
    reversed: false,
  },
  {
    id: "bodaPortfolioSite",
    titleKey: "title",
    descKey: "description",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageLink: "/bodaPortfolio.webp",
    githubHref: "https://github.com/mahte007/boda_portfolio",
    reversed: true,
  },
  {
    id: "architectPortfolio",
    titleKey: "title",
    descKey: "description",
    tags: ["React", "Vanilla CSS", "Next.js", "LocalStorage"],
    imageLink: "/architectGalery.webp",
    githubHref: "https://github.com/mahte007/architect-portfolio",
    reversed: false,
  },
];

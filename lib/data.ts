export type Project = {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
};

export type PortfolioData = {
  name: string;
  tagline: string;
  role: string;
  coreTechStack: string[];
  projects: Project[];
  contact: {
    email: string;
    github: string;
    blogOrLinkedIn: string;
  };
};

export const portfolioData: PortfolioData = {
  name: "명준호",
  tagline:
    "안녕하세요! 사용자 경험을 설계하는 프론트엔드 개발자 명준호입니다.",
  role: "컴퓨터공학과 학생 / 주니어 개발자",
  coreTechStack: ["TypeScript", "React", "Next.js", "Firebase"],
  projects: [
    {
      name: "[ 프로젝트명 1 ]",
      description: "1~2줄의 짧은 설명을 여기에 작성하세요. 사용 기술과 핵심 기능을 담아주세요.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "[ 프로젝트명 2 ]",
      description: "1~2줄의 짧은 설명을 여기에 작성하세요. 문제 해결 포인트를 함께 적어주세요.",
      techStack: ["React", "Firebase", "Framer Motion"]
    }
  ],
  contact: {
    email: "[ 이메일 주소 ]",
    github: "[ 깃허브 링크 ]",
    blogOrLinkedIn: "[ 링크 ]"
  }
};

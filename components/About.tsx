import FadeInSection from "@/components/FadeInSection";
import { portfolioData } from "@/lib/data";

export default function About() {
  return (
    <FadeInSection className="mt-14 sm:mt-20" delay={0.1}>
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          현재 <span className="font-semibold text-slate-100">{portfolioData.role}</span>{" "}
          으로 활동하며, 사용자 중심의 제품 경험을 고민하고 구현하는 데 집중하고
          있습니다.
        </p>
        <ul className="flex flex-wrap gap-2">
          {portfolioData.coreTechStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 sm:text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}

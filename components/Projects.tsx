import { ExternalLink } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { portfolioData } from "@/lib/data";

export default function Projects() {
  return (
    <FadeInSection className="mt-14 sm:mt-20" delay={0.2}>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
        <div className="grid gap-4">
          {portfolioData.projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-indigo-200"
                  >
                    보기
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={`${project.name}-${tech}`}
                    className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}

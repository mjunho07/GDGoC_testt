import { ArrowDownRight, Mail } from "lucide-react";
import { portfolioData } from "@/lib/data";
import FadeInSection from "@/components/FadeInSection";

export default function Hero() {
  return (
    <FadeInSection className="pt-8 sm:pt-16">
      <div className="space-y-5">
        <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200">
          {portfolioData.role}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {portfolioData.name}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {portfolioData.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
          >
            GitHub
            <ArrowDownRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </FadeInSection>
  );
}

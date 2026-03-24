import { Code2, Mail, PencilLine } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 pt-8 pb-10 sm:mt-24">
      <div className="flex flex-col gap-4 text-sm text-slate-400">
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-flex items-center gap-2 hover:text-slate-100"
          >
            <Mail className="h-4 w-4" />
            {portfolioData.contact.email}
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-slate-100"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={portfolioData.contact.blogOrLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-slate-100"
          >
            <PencilLine className="h-4 w-4" />
            Blog / LinkedIn
          </a>
        </div>
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

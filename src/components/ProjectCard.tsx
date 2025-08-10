import { Badge } from "@/components/ui/badge";
import React from "react";

interface ProjectCardProps {
  title: string;
  summary: string;
  tools: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, tools }) => {
  return (
    <article
      className="group relative rounded-lg border-2 border-foreground bg-card overflow-hidden [perspective:1200px] transition-transform duration-200 hover:-translate-y-1 animate-enter"
      aria-label={title}
    >
      {/* Always-visible title */}
      <div className="relative z-20 p-5">
        <h3 className="font-display tracking-wide text-lg md:text-xl">{title}</h3>
      </div>

      {/* Envelope top flap */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-accent border-b-2 border-foreground origin-top [transform-style:preserve-3d] [transform:rotateX(0deg)] transition-transform duration-500 ease-out group-hover:[transform:rotateX(180deg)]"
        aria-hidden="true"
      />

      {/* Envelope body cover */}
      <div
        className="absolute top-1/2 left-0 w-full h-1/2 bg-card border-t-2 border-foreground"
        aria-hidden="true"
      />

      {/* Revealed content */}
      <div className="absolute inset-0 z-10 p-5 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-sm text-foreground/85 mb-3 max-w-prose">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
